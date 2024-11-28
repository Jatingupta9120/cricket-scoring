import { Injectable } from '@nestjs/common';
import { Extras } from '../entity/extrasEntity.dto';

@Injectable()
export class ExtrasRepository {
    constructor() {}

    // Method to find an extra by its ID
    async findById(id: string): Promise<Extras | null> {
        return await Extras.findOne({
            where: { id },
        });
    }

    // Method to find extras by matchId
    async findByMatchId(matchId: string): Promise<Extras[]> {
        return Extras.findAll({
            where: { matchId },
        });
    }

    // Method to create a new extra record
    async create(extrasData: Partial<Extras>): Promise<Extras> {
        return Extras.create(extrasData);
    }

    // Method to update an existing extra record
    async update(
        id: string,
        updateData: Partial<Extras>,
    ): Promise<Extras | null> {
        const extra = await this.findById(id);
        if (!extra) {
            return null; // If the extra does not exist, return null
        }
        return extra.update(updateData);
    }

    // Method to delete an extra by its ID
    async delete(id: string): Promise<boolean> {
        const extra = await this.findById(id);
        if (!extra) {
            return false; // If the extra does not exist, return false
        }
        await extra.destroy(); // Delete the extra record
        return true; // Successfully deleted
    }
}
