// src/modules/match/match.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeamDTO, UpdateTeamDTO } from '../dto/Createteam.dto';
import { TeamRepository } from '../repository/team.repository';
@Injectable()
export class TeamService {
    constructor(private readonly teamRepository: TeamRepository) {}

    async create(createTeamDTO: CreateTeamDTO) {
        const team = await this.teamRepository.create(createTeamDTO);
        return team;
    }

    // Get all teams
    async getAll() {
        return await this.teamRepository.findAll();
    }

    // Get a team by its ID
    async getById(id: string) {
        const team = await this.teamRepository.findById(id);

        if (!team) {
            throw new NotFoundException(`Team with ID ${id} not found`);
        }

        return team;
    }

    // Update an existing team
    async update(id: string, updateTeamDTO: UpdateTeamDTO) {
        const team = await this.teamRepository.findById(id); // Check if the team exists

        await team.update(updateTeamDTO); // Update team data

        return team;
    }

    // Delete a team by its ID
    async delete(id: string) {
        const team = await this.teamRepository.findById(id); // Check if the team exists

        await team.destroy(); // Delete team
    }
}
