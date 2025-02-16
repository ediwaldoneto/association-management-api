import { Server } from 'restify';
import { ServiceController } from '../controllers/ServiceController';

const serviceController = new ServiceController();

export const registerServiceRoutes = (server: Server): void => {
    server.post('/services', serviceController.create);
    server.get('/services', serviceController.getAll);
    server.post('/services/addBeneficiary', serviceController.addBeneficiary); 
    server.post('/services/addDependent', serviceController.addDependent);  
    server.get('/services/:id', serviceController.getById);
    server.put('/services/:id', serviceController.update);
    server.del('/services/:id', serviceController.delete);
    server.get('/services/names', serviceController.getServiceNames);
};
