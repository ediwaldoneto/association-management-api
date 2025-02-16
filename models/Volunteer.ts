import mongoose, { Document, Schema } from 'mongoose';

export interface IVolunteer extends Document {
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
    role: string;
    skills: string[];
    }

const VolunteerSchema: Schema = new Schema({
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
    role: { type: String, required: true },
    skills: { type: [String], required: true }
});

export default mongoose.model<IVolunteer>('Volunteer', VolunteerSchema);

