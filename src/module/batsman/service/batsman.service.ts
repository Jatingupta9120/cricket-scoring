import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBatsmanDTO, UpdateBatsmanDTO } from '../dto/Createbatsman.dto';
import { BatsmanRepository } from '../repository/batsman.repository';

@Injectable()
export class BatsmanService {
    constructor(private readonly batsmanRepository: BatsmanRepository) {}

    async create(createBatsmanDTO: CreateBatsmanDTO) {
        try {
            const batsman = await this.batsmanRepository.create(
                createBatsmanDTO,
            );
            return batsman;
        } catch (error) {
            throw new Error('Error creating batsman');
        }
    }

    async getAll() {
        return this.batsmanRepository.getAllBatsman();
    }

    async getById(id: string) {
        const batsman = await this.batsmanRepository.findOneBatsman(id);

        if (!batsman) {
            throw new NotFoundException(`Batsman with ID ${id} not found`);
        }

        return batsman;
    }

    async update(id: string, updateBatsmanDTO: UpdateBatsmanDTO) {
        const batsman = await this.getById(id);

        await batsman.update(updateBatsmanDTO);

        return batsman;
    }

    async delete(id: string): Promise<void> {
        const batsman = await this.getById(id);

        await batsman.destroy();
    }
}
