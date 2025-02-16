import mongoose, { Document, Schema } from 'mongoose';

export interface IBeneficiary extends Document {
  name: string;
  cpf: string;
  rg: string;
  birthDate: Date;
  email: string;
  phone: string;
  address: string;
  number: number;
  cep: string;
  neighborhood: string;
  city: string;
  state: string;
  complement?: string;
  needs: string[];
  dependents?: mongoose.Types.ObjectId[];
  
}

const BeneficiarySchema: Schema = new Schema({
  name: { type: String, required: true },
  cpf: { type: String, required: true },
  rg: { type: String, required: true },
  birthDate: { type: Date, required: true },
  email: { type: String },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  number: { type: Number, required: true },
  cep: { type: String, required: true },
  neighborhood: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  complement: { type: String },
  needs: { type: [String], required: true },
  dependents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dependent' }]
});

export default mongoose.model<IBeneficiary>('Beneficiary', BeneficiarySchema);
