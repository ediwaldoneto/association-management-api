import { Request, Response, Next } from 'restify';
import { VolunteerService } from '../services/VolunteerService';
import logger from '../utils/Logger'

const volunteerService = new VolunteerService();

export class VolunteerController {
    public async create(req: Request, res: Response, next: Next): Promise<void> {
        try {
            const volunteer = await volunteerService.createVolunteer(req.body);
            res.send(201, volunteer);
            next();
        } catch (error) {
            logger.error('Error creating volunteer:', error);
            res.send(500, error);
            next();
        }
    }

    public async getAll(req: Request, res: Response, next: Next): Promise<void> {
        try {
            const volunteers = await volunteerService.getVolunteers();
            res.send(200, volunteers);
            next();
        } catch (error) {
            logger.error('Error fetching volunteers:', error);
            res.send(500, error);
            next();
        }
    }

    public async getById(req: Request, res: Response, next: Next): Promise<void> {
        try {
            const volunteer = await volunteerService.getVolunteerById(req.params.id);
            if (volunteer) {
                res.send(200, volunteer);
            } else {
                res.send(404, { message: 'Volunteer not found' });
            }
            next();
        } catch (error) {
            logger.error('Error fetching volunteer:', error);
            res.send(500, error);
            next();
        }
    }

    public async update(req: Request, res: Response, next: Next): Promise<void> {
        try {
            const volunteer = await volunteerService.updateVolunteer(req.params.id, req.body);
            if (volunteer) {
                res.send(200, volunteer);
            } else {
                res.send(404, { message: 'Volunteer not found' });
            }
            next();
        } catch (error) {
            logger.error('Error updating volunteer:', error);
            res.send(500, error);
            next();
        }
    }

    public async delete(req: Request, res: Response, next: Next): Promise<void> {
        try {
            const volunteer = await volunteerService.deleteVolunteer(req.params.id);
            if (volunteer) {
                res.send(200, volunteer);
            } else {
                res.send(404, { message: 'Volunteer not found' });
            }
            next();
        } catch (error) {
            logger.error('Error deleting volunteer:', error);
            res.send(500, error);
            next();
        }
    }
}