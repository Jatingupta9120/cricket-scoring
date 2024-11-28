// src/modules/match/batsman.repository.ts
import { Injectable } from '@nestjs/common';
import { Batsman as BatsmanEntity } from '../entity/batsman.entity';
import { CreateBatsmanDTO, UpdateBatsmanDTO } from '../dto/Createbatsman.dto';
import { Batsman } from '../entity/batsman.entity';

@Injectable()
export class BatsmanRepository {
    constructor() {}

    // Create a new batsman record
    async create(createBatsmanDTO: CreateBatsmanDTO): Promise<Batsman> {
        try {
            return await BatsmanEntity.create(createBatsmanDTO); // Return the newly created batsman
        } catch (error) {
            throw new Error('Error creating batsman');
        }
    }

    // Get all batsmen
    async getAllBatsman(): Promise<Batsman[]> {
        try {
            // Fetch all batsmen using the findAll method
            return await BatsmanEntity.findAll();
        } catch (error) {
            throw new Error('Error fetching batsmen');
        }
    }

    // Get a specific batsman by ID
    async findOneBatsman(id: string): Promise<Batsman | null> {
        try {
            // Find batsman by ID using findOne
            const batsman = await BatsmanEntity.findOne({ where: { id } });
            return batsman; // Return the batsman if found
        } catch (error) {
            throw new Error('Error fetching batsman by ID');
        }
    }

    // Update a batsman record
    async update(
        id: string,
        updateBatsmanDTO: UpdateBatsmanDTO,
    ): Promise<Batsman | null> {
        try {
            // Find batsman by ID
            const batsman = await this.findOneBatsman(id);
            if (!batsman) {
                throw new Error(`Batsman with ID ${id} not found`);
            }
            // Update the batsman with the new data
            await batsman.update(updateBatsmanDTO);
            return batsman; // Return the updated batsman
        } catch (error) {
            throw new Error('Error updating batsman');
        }
    }

    // Delete a batsman by ID
    async delete(id: string): Promise<void> {
        try {
            const batsman = await this.findOneBatsman(id);
            if (!batsman) {
                throw new Error(`Batsman with ID ${id} not found`);
            }
            // Delete the batsman
            await batsman.destroy();
        } catch (error) {
            throw new Error('Error deleting batsman');
        }
    }
}
