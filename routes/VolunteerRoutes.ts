import { Server } from 'restify';
import { VolunteerController } from '../controllers/VolunteerController';

const volunteerController = new VolunteerController();

export const registerVolunteerRoutes = (server: Server): void => {
    server.post('/volunteers', volunteerController.create);
    server.get('/volunteers', volunteerController.getAll);
    server.get('/volunteers/:id', volunteerController.getById);
    server.put('/volunteers/:id', volunteerController.update);
    server.del('/volunteers/:id', volunteerController.delete);
};