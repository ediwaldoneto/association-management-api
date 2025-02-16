import mongoose, { Document, Schema } from 'mongoose';

export interface IDependent extends Document {
  __v: any;
  name: string;
  cpf: string;
  rg: string;
  birthDate: Date;
  beneficiary: mongoose.Types.ObjectId;
}

const DependentSchema: Schema = new Schema({
  name: { type: String, required: true },
  birthDate: { type: Date, required: true },
  cpf: { type: String, required: false },
  rg: { type: String, required: false },
  beneficiary: { type: mongoose.Schema.Types.ObjectId, ref: 'Beneficiary', required: true },
});

export default mongoose.model<IDependent>('Dependent', DependentSchema);
