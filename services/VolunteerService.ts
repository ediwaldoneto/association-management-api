import { VolunteerRepository } from "../repositories/VolunteerRepository";
import { IVolunteer } from "../models/Volunteer";

const volunteerRepository = new VolunteerRepository();

export class VolunteerService {
  public async createVolunteer(data: IVolunteer): Promise<IVolunteer> {
    return await volunteerRepository.create(data);
  }

  public async getVolunteers(): Promise<IVolunteer[]> {
    return await volunteerRepository.findAll();
  }

  public async getVolunteerById(id: string): Promise<IVolunteer | null> {
    return await volunteerRepository.findById(id);
  }

  public async updateVolunteer(id: string, data: Partial<IVolunteer>): Promise<IVolunteer | null> {
    return await volunteerRepository.update(id, data);
  }

  public async deleteVolunteer(id: string): Promise<IVolunteer | null> {
    return await volunteerRepository.delete(id);
  }
}