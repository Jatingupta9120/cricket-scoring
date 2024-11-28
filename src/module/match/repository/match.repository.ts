import { Injectable } from '@nestjs/common';
import { MatchEntity } from '../entity/match.entity';
import { UpdateMatchDTO } from '../dto/match.dto';
import { TeamEntity } from 'src/module/team/entity/team.entity';

@Injectable()
export class MatchRepository {
    constructor() {}

    async findById(id: string) {

        return await MatchEntity.findByPk(id, {
            include: [TeamEntity], 
        });
    }

    

    async findAll(): Promise<MatchEntity[]> {

        return await MatchEntity.findAll();
    }

    async save(match: MatchEntity): Promise<MatchEntity> {

        return await match.save();
    }

    async create(matchData: UpdateMatchDTO): Promise<MatchEntity> {
        const match = await MatchEntity.create(matchData);
        return match;
    }
}
