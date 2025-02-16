import mongoose, { Document, Schema } from 'mongoose';


export interface IService extends Document {
  name: string;
  description: string;
  date: Date;
  volunteers: mongoose.Types.ObjectId[];
  beneficiaries: mongoose.Types.ObjectId[];
  dependents: mongoose.Types.ObjectId[];
}

const ServiceSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  volunteers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Volunteer' }],
  beneficiaries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Beneficiary' }],
  dependents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dependent' }]
});

export default mongoose.model<IService>('Service', ServiceSchema);
