import { Request, Response, Next } from 'restify';
import { ObjectId } from 'mongodb';
import { BeneficiaryService } from '../services/BeneficiaryService';
import { DependentService } from '../services/DependentService';
import logger from '../utils/Logger';

const beneficiaryService = new BeneficiaryService();
const dependentService = new DependentService();

export class BeneficiaryWithDependentsController {
  public async create(req: Request, res: Response, next: Next): Promise<void> {
    const { name, birthDate, address, phone, needs, dependents, cpf, rg, email, number, ...otherProps } = req.body;

    try {
    
      const beneficiary = await beneficiaryService.createBeneficiary({
        name,
        birthDate,
        address,
        phone,
        needs,
        dependents: [],
        cpf,
        rg,
        email,
        number,
        ...otherProps
      });

     
      if (!beneficiary.dependents) {
        beneficiary.dependents = [];
      }

      
      for (const dependentData of dependents) {
        const dependent = await dependentService.createDependent({
          ...dependentData,
          beneficiary: beneficiary._id
        });
        beneficiary.dependents.push(dependent._id as ObjectId);
      }

      
      await beneficiary.save();

      res.send(201, beneficiary);
      next();
    } catch (error) {
      logger.error('Error creating beneficiary:', error);
      res.send(500, error);
      next();
    }
  }
}
