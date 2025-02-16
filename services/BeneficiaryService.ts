import { BeneficiaryRepository } from '../repositories/BeneficiaryRepository';
import { IBeneficiary } from '../models/Beneficiary';

const beneficiaryRepository = new BeneficiaryRepository();

export class BeneficiaryService {
  public async createBeneficiary(data: IBeneficiary): Promise<IBeneficiary> {
    return await beneficiaryRepository.create(data);
  }

  public async getBeneficiaries(): Promise<IBeneficiary[]> {
    return await beneficiaryRepository.findAll();
  }
  public async getBeneficiaryById(id: string): Promise<IBeneficiary | null> {
    return await beneficiaryRepository.findById(id);
  }

  public async updateBeneficiary(id: string, data: Partial<IBeneficiary>): Promise<IBeneficiary | null> {
    return await beneficiaryRepository.update(id, data);
  }

  public async deleteBeneficiary(id: string): Promise<IBeneficiary | null> {
    return await beneficiaryRepository.delete(id);
  }
}
