import { Module, forwardRef } from '@nestjs/common';
import { TeamController } from './controller/team.controller';
import { TeamRepository } from './repository/team.repository';
import { TeamService } from './service/team.service';
import { MatchModule } from '../match/match.module';

@Module({
    imports: [forwardRef(() => MatchModule)],
    controllers: [TeamController],
    providers: [TeamRepository, TeamService],
    exports: [TeamRepository, TeamService],
})
export class TeamModule {}
