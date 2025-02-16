import { Request, Response, Next } from 'restify';
import { DependentService } from '../services/DependentService';
import logger from '../utils/Logger';

const dependentService = new DependentService();

export class DependentController {
  public async create(req: Request, res: Response, next: Next): Promise<void> {
    try {
      const dependent = await dependentService.createDependent(req.body);
      res.send(201, dependent);
      next();
    } catch (error) {
      logger.error('Error creating dependent:', error);
      res.send(500, error);
      next();
    }
  }

  public async getAll(req: Request, res: Response, next: Next): Promise<void> {
    try {
      const dependents = await dependentService.getDependents();
      res.send(200, dependents);
      next();
    } catch (error) {
      logger.error('Error fetching dependents:', error);
      res.send(500, error);
      next();
    }
  }

  public async getById(req: Request, res: Response, next: Next): Promise<void> {
    try {
      const dependent = await dependentService.getDependentById(req.params.id);
      if (dependent) {
        res.send(200, dependent);
      } else {
        res.send(404, { message: 'Dependent not found' });
      }
      next();
    } catch (error) {
      logger.error('Error fetching dependent:', error);
      res.send(500, error);
      next();
    }
  }

  public async update(req: Request, res: Response, next: Next): Promise<void> {
    try {
      const dependent = await dependentService.updateDependent(req.params.id, req.body);
      if (dependent) {
        res.send(200, dependent);
      } else {
        res.send(404, { message: 'Dependent not found' });
      }
      next();
    } catch (error) {
      logger.error('Error updating dependent:', error);
      res.send(500, error);
      next();
    }
  }

  public async delete(req: Request, res: Response, next: Next): Promise<void> {
    try {
      const dependent = await dependentService.deleteDependent(req.params.id);
      if (dependent) {
        res.send(204);
      } else {
        res.send(404, { message: 'Dependent not found' });
      }
      next();
    } catch (error) {
      logger.error('Error deleting dependent:', error);
      res.send(500, error);
      next();
    }
  }
}
