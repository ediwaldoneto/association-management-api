import { Request, Response, Next } from 'restify';
import { BeneficiaryService } from '../services/BeneficiaryService';
import logger from '../utils/Logger'

const beneficiaryService = new BeneficiaryService();

export class BeneficiaryController {
    public async create(req: Request, res: Response, next: Next): Promise<void> {
        try {
            const beneficiary = await beneficiaryService.createBeneficiary(req.body);
            res.send(201, beneficiary);
            next();
        } catch (error) {
            if ((error as any).code === 11000) {
                const duplicateField = Object.keys((error as any).keyValue)[0];
                res.send(409, { message: `${duplicateField.charAt(0).toUpperCase() + duplicateField.slice(1)} ${(error as any).keyValue[duplicateField]} already registered.` });
            } else {
                logger.error('Error creating beneficiary:', error);
                res.send(500, error);
            }
            next();
        }
    }

    public async getAll(req: Request, res: Response, next: Next): Promise<void> {
        try {
            const beneficiaries = await beneficiaryService.getBeneficiaries();
            res.send(200, beneficiaries);
            next();
        } catch (error) {
            logger.error('Error fetching beneficiaries:', error);
            res.send(500, error);
            next();
        }
    }

    public async getById(req: Request, res: Response, next: Next): Promise<void> {
        try {
            const beneficiary = await beneficiaryService.getBeneficiaryById(req.params.id);
            if (beneficiary) {
                res.send(200, beneficiary);
            } else {
                res.send(404, { message: 'Beneficiary not found' });
            }
            next();
        } catch (error) {
            console.error('Error fetching beneficiary:', error);
            res.send(500, error);
            next();
        }
    }

    public async update(req: Request, res: Response, next: Next): Promise<void> {
        try {
            const beneficiary = await beneficiaryService.updateBeneficiary(req.params.id, req.body);
            if (beneficiary) {
                res.send(200, beneficiary);
            } else {
                res.send(404, { message: 'Beneficiary not found' });
            }
            next();
        } catch (error) {
            console.error('Error updating beneficiary:', error);
            res.send(500, error);
            next();
        }
    }

    public async delete(req: Request, res: Response, next: Next): Promise<void> {
        try {
            const beneficiary = await beneficiaryService.deleteBeneficiary(req.params.id);
            if (beneficiary) {
                res.send(204);
            } else {
                res.send(404, { message: 'Beneficiary not found' });
            }
            next();
        } catch (error) {
            console.error('Error deleting beneficiary:', error);
            res.send(500, error);
            next();
        }
    }
}
