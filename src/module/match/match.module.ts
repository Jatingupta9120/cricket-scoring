import { Module, forwardRef } from '@nestjs/common';
import { MatchController } from './controller/match.controller';
import { MatchRepository } from './repository/match.repository';
import { MatchService } from './service/match.service';
import { BatsmanModule } from '../batsman/batsman.module';
import { BowlerModule } from '../bowler/bowler.module';
import { TeamModule } from '../team/team.module';
import { ExtrasModule } from '../extras/extras.module';

@Module({
    imports: [
        BatsmanModule,
        BowlerModule,
        TeamModule,
        forwardRef(() => ExtrasModule),
    ],
    controllers: [MatchController],
    providers: [MatchRepository, MatchService],
    exports: [MatchRepository, MatchService],
})
export class MatchModule {}
