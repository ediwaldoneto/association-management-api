export const Environment = {
    server: { port: process.env.SERVER_PORT || 3000 },
    mongoURI: { url: process.env.MONGO_URL || 'mongodb://localhost:27017/association' },
    
  };