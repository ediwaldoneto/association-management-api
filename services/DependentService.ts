import { DependentRepository } from '../repositories/DependentRepository';
import { IDependent } from '../models/Dependent';

const dependentRepository = new DependentRepository();

export class DependentService {
  public async createDependent(data: IDependent): Promise<IDependent> {
    return await dependentRepository.create(data);
  }

  public async getDependents(): Promise<IDependent[]> {
    return await dependentRepository.findAll();
  }

  public async getDependentById(id: string): Promise<IDependent | null> {
    return await dependentRepository.findById(id);
  }

  public async updateDependent(id: string, data: Partial<IDependent>): Promise<IDependent | null> {
    return await dependentRepository.update(id, data);
  }

  public async deleteDependent(id: string): Promise<IDependent | null> {
    return await dependentRepository.delete(id);
  }

}
