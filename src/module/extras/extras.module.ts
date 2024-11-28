import { Module } from '@nestjs/common';
import { ExtrasController } from './controller/extras.controller';
import { ExtrasRepository } from './repository/Extras.repository';
import { ExtrasService } from './service/Extras.service';
import { MatchModule } from '../match/match.module';
import { BatsmanModule } from '../batsman/batsman.module';
import { BowlerModule } from '../bowler/bowler.module';
import { TeamModule } from '../team/team.module';

@Module({
    imports: [MatchModule, BatsmanModule, BowlerModule, TeamModule],
    controllers: [ExtrasController],
    providers: [ExtrasRepository, ExtrasService],
    exports: [ExtrasRepository, ExtrasService],
})
export class ExtrasModule {}
