// src/modules/match/bowler.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BowlerDTO } from '../dto/CreateBowler.dto';
import { Bowler } from '../entity/bowlerEntity.dto';

@Injectable()
export class BowlerRepository {
    constructor() {}

    // Find all bowlers
    async findAll(): Promise<Bowler[]> {
        return await Bowler.findAll();
    }

    // Find a bowler by ID
    async findById(id: string): Promise<Bowler | null> {
        return Bowler.findOne({ where: { id } });
    }

    // Create a new bowler
    async create(bowlerDTO: BowlerDTO): Promise<Bowler> {
        return Bowler.create(bowlerDTO);
    }

    // Update an existing bowler
    async update(
        id: string,
        updateData: Partial<BowlerDTO>,
    ): Promise<Bowler | null> {
        const bowler = await this.findById(id);
        if (!bowler) return null;
        return bowler.update(updateData);
    }

    // Delete a bowler by ID
    async delete(id: string): Promise<boolean> {
        const bowler = await this.findById(id);
        if (!bowler) return false;
        await bowler.destroy();
        return true;
    }
}
