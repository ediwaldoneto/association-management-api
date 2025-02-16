import Dependent, { IDependent } from '../models/Dependent';

export class DependentRepository {
  public async create(data: Partial<IDependent>): Promise<IDependent> {
    const dependent = new Dependent(data);
    return await dependent.save();
  }

  public async findAll(): Promise<IDependent[]> {
    return await Dependent.find().populate('beneficiary');
  }

  public async findById(id: string): Promise<IDependent | null> {
    return await Dependent.findById(id).populate('beneficiary');
  }

  public async update(id: string, data: Partial<IDependent>): Promise<IDependent | null> {
    return await Dependent.findByIdAndUpdate(id, data, { new: true }).populate('beneficiary');
  }

  public async delete(id: string): Promise<IDependent | null> {
    return await Dependent.findByIdAndDelete(id).populate('beneficiary');
  }
}
