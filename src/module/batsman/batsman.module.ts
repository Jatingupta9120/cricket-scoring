import { Module } from '@nestjs/common';
import { BatsmanController } from './controller/batsman.controller';
import { BatsmanRepository } from './repository/batsman.repository';
import { BatsmanService } from './service/batsman.service';

@Module({
    imports: [],
    exports: [BatsmanRepository],
    providers: [BatsmanRepository, BatsmanService],
    controllers: [BatsmanController],
})
export class BatsmanModule {}
