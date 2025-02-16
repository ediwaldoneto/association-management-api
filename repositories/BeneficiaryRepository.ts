import Beneficiary, { IBeneficiary } from '../models/Beneficiary';


export class BeneficiaryRepository {
    public async create(data: Partial<IBeneficiary>): Promise<IBeneficiary> {
        const beneficiary = new Beneficiary(data);
        return await beneficiary.save();
    }

    public async findAll(): Promise<IBeneficiary[]> {
        return await Beneficiary.find().populate('dependents').exec()
    }

    public async findById(id: string): Promise<IBeneficiary | null> {
        return await Beneficiary.findById(id).populate('dependents').exec();
    }

    public async update(id: string, data: Partial<IBeneficiary>): Promise<IBeneficiary | null> {
        return await Beneficiary.findByIdAndUpdate(id, data, { new: true }).populate('dependents').exec();
    }

    public async delete(id: string): Promise<IBeneficiary | null> {
        return await Beneficiary.findByIdAndDelete(id).populate('dependents').exec();
    }
}
