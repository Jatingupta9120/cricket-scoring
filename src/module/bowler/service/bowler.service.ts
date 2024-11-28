// src/modules/match/bowler.service.ts
import { Injectable } from '@nestjs/common';
import { BowlerRepository } from '../repository/bowler.repository';
import { Bowler } from '../entity/bowlerEntity.dto';
import { CreateBowlerDTO, UpdateBowlerDTO } from '../dto/CreateBowler.dto';

@Injectable()
export class BowlerService {
    constructor(private readonly bowlerRepository: BowlerRepository) {}

    // Create a new bowler
    async createBowler(bowlerDTO: CreateBowlerDTO): Promise<Bowler> {
        return this.bowlerRepository.create(bowlerDTO);
    }

    // Get all bowlers
    async getAllBowlers(): Promise<Bowler[]> {
        return this.bowlerRepository.findAll();
    }

    // Get a bowler by their ID
    async getBowlerById(id: string): Promise<Bowler | null> {
        return this.bowlerRepository.findById(id);
    }

    // Update a bowler's details
    async updateBowler(
        id: string,
        bowlerDTO: UpdateBowlerDTO,
    ): Promise<Bowler | null> {
        return this.bowlerRepository.update(id, bowlerDTO);
    }

    // Delete a bowler by their ID
    async deleteBowler(id: string): Promise<boolean> {
        return this.bowlerRepository.delete(id);
    }
}
