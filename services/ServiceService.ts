import Service, { IService } from '../models/Service';
import { Types } from 'mongoose';

export class ServiceService {
    public async createService(data: IService): Promise<IService> {
        const service = new Service(data);
        return await service.save();
    }

    public async getAllServices(): Promise<IService[]> {
        return await Service.find()
            .populate('volunteers')
            .populate('beneficiaries')
            .populate('dependents')
            .exec();
    }

    public async addBeneficiaryToService(serviceId: string, beneficiaryId: string): Promise<IService | null> {
        const service = await Service.findById(serviceId);
        if (!service) {
            throw new Error('Service not found');
        }
        service.beneficiaries.push(beneficiaryId as unknown as Types.ObjectId);
        await service.save();
        return service;
    }

    public async addDependentToService(serviceId: string, dependentId: string): Promise<IService | null> {
        const service = await Service.findById(serviceId);
        if (!service) {
            throw new Error('Service not found');
        }
        service.dependents.push(dependentId as unknown as Types.ObjectId);
        await service.save();
        return service;
    }

    public async getServiceById(id: string): Promise<IService | null> {
        return await Service.findById(id)
            .populate('volunteers')
            .populate('beneficiaries')
            .populate('dependents')
            .exec();
    }

    public async updateService(id: string, data: Partial<IService>): Promise<IService | null> {
        return await Service.findByIdAndUpdate(id, data, { new: true })
    }

    public async deleteService(id: string): Promise<IService | null> {
        return await Service.findByIdAndDelete(id)
    }

    public async getServiceNames(): Promise<{ name: string }[]> {
        return await Service.find({}, 'name').exec(); 


    }
}