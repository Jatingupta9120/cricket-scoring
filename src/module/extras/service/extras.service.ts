// src/modules/match/extras.service.ts
import { Injectable } from '@nestjs/common';
import { ExtrasRepository } from '../repository/Extras.repository';
import { CreateExtraDTO, UpdateExtraDTO } from '../dto/CreateExtras.dto';
@Injectable()
export class ExtrasService {
    constructor(private readonly extrasRepository: ExtrasRepository) {}

    async getExtrasById(id: string) {
        return this.extrasRepository.findById(id);
    }

    async getExtrasByMatchId(matchId: string) {
        return this.extrasRepository.findByMatchId(matchId);
    }

    async createExtra(extrasData: CreateExtraDTO) {
        return this.extrasRepository.create(extrasData);
    }

    async updateExtra(id: string, updateData: UpdateExtraDTO) {
        return this.extrasRepository.update(id, updateData);
    }

    async deleteExtra(id: string): Promise<boolean> {
        return this.extrasRepository.delete(id);
    }
}
