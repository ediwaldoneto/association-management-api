import { Server } from 'restify';
import { DependentController } from '../controllers/DependentController';

const dependentController = new DependentController();

export const registerDependentRoutes = (server: Server): void => {
  server.post('/dependents', dependentController.create);
  server.get('/dependents', dependentController.getAll);
  server.get('/dependents/:id', dependentController.getById);
  server.put('/dependents/:id', dependentController.update);
  server.del('/dependents/:id', dependentController.delete);
};
