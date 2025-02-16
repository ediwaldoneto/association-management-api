import { Server } from 'restify';
import { BeneficiaryWithDependentsController } from '../controllers/BeneficiaryWithDependentsController';

const beneficiaryWithDependentsController = new BeneficiaryWithDependentsController();

export const registerBeneficiaryWithDependentsRoutes = (server: Server): void => {
  server.post('/beneficiaries-with-dependents', beneficiaryWithDependentsController.create);
};
