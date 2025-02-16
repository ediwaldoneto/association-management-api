import { Request, Response, Next } from 'restify';
import { ServiceService } from '../services/ServiceService';
import logger from '../utils/Logger';

const serviceService = new ServiceService();

export class ServiceController {
    public async create(req: Request, res: Response, next: Next): Promise<void> {
        try {
            const service = await serviceService.createService(req.body);
            res.send(201, service);
            next();
        } catch (error) {
            logger.error('Error creating service:', error);
            res.send(500, error);
            next();
        }
    }

    public async getAll(req: Request, res: Response, next: Next): Promise<void> {
        try {
            const services = await serviceService.getAllServices();
            res.send(200, services);
            next();
        } catch (error) {
            logger.error('Error fetching services:', error);
            res.send(500, error);
            next();
        }
    }

    public async addBeneficiary(req: Request, res: Response, next: Next): Promise<void> {
        try {
            const { serviceId, beneficiaryId } = req.body;
            const service = await serviceService.addBeneficiaryToService(serviceId, beneficiaryId);
            res.send(200, service);
            next();
        } catch (error) {
            logger.error('Error adding beneficiary to service:', error);
            res.send(500, error);
            next();
        }
    }

    public async addDependent(req: Request, res: Response, next: Next): Promise<void> {
        try {
            const { serviceId, dependentId } = req.body;
            const service = await serviceService.addDependentToService(serviceId, dependentId);
            res.send(200, service);
            next();
        } catch (error) {
            logger.error('Error adding dependent to service:', error);
            res.send(500, error);
            next();
        }
    }

    public async getById(req: Request, res: Response, next: Next): Promise<void> {
        try {
            const service = await serviceService.getServiceById(req.params.id);
            if (service) {
                res.send(200, service);
            } else {
                res.send(404, { message: 'Service not found' });
            }
            next();
        } catch (error) {
            logger.error('Error fetching service:', error);
            res.send(500, error);
            next();
        }
    }

    public async update(req: Request, res: Response, next: Next): Promise<void> {
        try {
            const service = await serviceService.updateService(req.params.id, req.body);
            if (service) {
                res.send(200, service);
            } else {
                res.send(404, { message: 'Service not found' });
            }
            next();
        } catch (error) {
            logger.error('Error updating service:', error);
            res.send(500, error);
            next();
        }
    }

    public async delete(req: Request, res: Response, next: Next): Promise<void> {
        try {
            const service = await serviceService.deleteService(req.params.id);
            if (service) {
                res.send(204);
            } else {
                res.send(404, { message: 'Service not found' });
            }
            next();
        } catch (error) {
            logger.error('Error deleting service:', error);
            res.send(500, error);
            next();
        }
    }

    public async getServiceNames(req: Request, res: Response, next: Next): Promise<void> {
        try {
          const serviceNames = await serviceService.getServiceNames();
          res.send(200, serviceNames);
          next();
        } catch (error) {
          logger.error('Error fetching service names:', error);
          res.send(500, error);
          next();
        }
      }
}
