import mongoose from 'mongoose';
import { Environment } from './common/Environment';
import logger from './Logger';

export const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = Environment.mongoURI.url;
  
    if (!mongoURI) {
      throw new Error('MongoDB URI is not defined');
    }

    await mongoose.connect(mongoURI);
    logger.info('MongoDB connection established successfully');

    const connection = mongoose.connection;
    const db = connection.db;
    if (!db) {
      throw new Error('Database connection failed');
    }

    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map(col => col.name);

    const requiredCollections = ['beneficiaries', 'dependents', 'services', 'volunteers', 'donors'];

    await Promise.all(
      requiredCollections.map(async (collection) => {
        if (!collectionNames.includes(collection)) {
          await db.createCollection(collection);
          logger.info(`Collection '${collection}' created.`);
        }
      })
    );
  } catch (error) {
    logger.error('MongoDB connection error', error);
    process.exit(1);
  }
};
