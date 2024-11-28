import { Module } from '@nestjs/common';
import { BowlerController } from './controller/bowler.controller';
import { BowlerRepository } from './repository/bowler.repository';
import { BowlerService } from './service/bowler.service';

@Module({
    imports: [],
    exports: [BowlerRepository],
    providers: [BowlerRepository, BowlerService],
    controllers: [BowlerController],
})
export class BowlerModule {}
