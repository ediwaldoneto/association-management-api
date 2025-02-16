import Volunteer, { IVolunteer } from "../models/Volunteer";

export class VolunteerRepository {

    public async create(data: Partial<IVolunteer>): Promise<IVolunteer> {
        const volunteer = new Volunteer(data);
        return await volunteer.save();
    }

    public async findAll(): Promise<IVolunteer[]> {
        return await Volunteer.find().exec();
    }

    public async findById(id: string): Promise<IVolunteer | null> {
        return await Volunteer.findById(id).exec();
    }

    public async update(id: string, data: Partial<IVolunteer>): Promise<IVolunteer | null> {
        return await Volunteer.findByIdAndUpdate(id, data, { new: true }).exec();
    }

    public async delete(id: string): Promise<IVolunteer | null> {
        return await Volunteer.findByIdAndDelete(id).exec();
    }
}
