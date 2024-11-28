import { Injectable } from '@nestjs/common';
import { TeamEntity } from '../entity/team.entity'; // Assuming you have a Team entity

@Injectable()
export class TeamRepository {
    constructor() {}

    // Find a team by its ID
    async findById(id: string): Promise<TeamEntity | null> {
        return await TeamEntity.findOne({
            where: { id },
        });
    }

    // Get all teams
    async findAll(): Promise<TeamEntity[]> {
        return await TeamEntity.findAll();
    }

    // Create a new team
    async create(teamData: Partial<TeamEntity>): Promise<TeamEntity> {
        const team = await TeamEntity.create(teamData);
        return team;
    }

    // Update a team's details
    async update(
        id: string,
        teamData: Partial<TeamEntity>,
    ): Promise<TeamEntity | null> {
        const team = await this.findById(id);

        if (!team) {
            return null;
        }

        await team.update(teamData);
        return team;
    }

    // Delete a team by its ID
    async delete(id: string): Promise<boolean> {
        const team = await this.findById(id);

        if (!team) {
            return false;
        }

        await team.destroy();
        return true;
    }
}
