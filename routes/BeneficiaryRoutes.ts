import { Server } from 'restify';
import { BeneficiaryController } from '../controllers/BeneficiaryController';

const beneficiaryController = new BeneficiaryController();

export const registerBeneficiaryRoutes = (server: Server): void => {
  server.post('/beneficiaries', beneficiaryController.create);
  server.get('/beneficiaries', beneficiaryController.getAll);
  server.get('/beneficiaries/:id', beneficiaryController.getById);
  server.put('/beneficiaries/:id', beneficiaryController.update);
  server.del('/beneficiaries/:id', beneficiaryController.delete);
};
