import Service,  {IService} from "../models/Service";

export class ServiceRepository {
    public async create(data: Partial<IService>): Promise<IService> {
        const service = new Service(data);
        return await service.save();
    }

    public async findAll(): Promise<IService[]> {
        return await Service.find();
    }

    public async findById(id: string): Promise<IService | null> {
        return await Service.findById(id);
    }

    public async update(id: string, data: Partial<IService>): Promise<IService | null> {
        return await Service.findByIdAndUpdate(id, data, { new: true });
    }

    public async delete(id: string): Promise<IService | null> {
        return await Service.findByIdAndDelete(id);
    }
}