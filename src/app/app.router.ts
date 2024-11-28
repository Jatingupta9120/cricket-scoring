import { DynamicModule, Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { BatsmanModule } from 'src/module/batsman/batsman.module';
import { BowlerModule } from 'src/module/bowler/bowler.module';
import { ExtrasModule } from 'src/module/extras/extras.module';
import { MatchModule } from 'src/module/match/match.module';
import { TeamModule } from 'src/module/team/team.module';
import { UserModule } from 'src/module/user/user.module';

const dynamicModule = [
    {
        path: 'users',
        module: UserModule,
    },
    {
        path: 'batsman',
        module: BatsmanModule,
    },
    {
        path: 'bowler',
        module: BowlerModule,
    },
    {
        path: 'extras',
        module: ExtrasModule,
    },
    {
        path: 'match',
        module: MatchModule,
    },
    {
        path: 'teams',
        module: TeamModule,
    },
];

@Module({})
export class AppRouterModule {
    static register(): DynamicModule {
        return {
            module: AppRouterModule,
            imports: [
                ...dynamicModule.map((item) => item.module),
                RouterModule.register(dynamicModule),
            ],
        };
    }
}
