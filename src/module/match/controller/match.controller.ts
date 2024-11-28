import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Get,
} from '@nestjs/common';
import { MatchService } from '../service/match.service';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { responseName } from 'src/constants/response';
import { GetMatchPathParams, UpdateMatchDTO } from '../dto/match.dto';
import { UpdateScoreDTO } from 'src/module/team/dto/Createteam.dto';

@Controller('score')
export class MatchController {
    constructor(private matchService: MatchService) {}

    @Post('update')
    @HttpCode(HttpStatus.CREATED)
    @ResponseCustom(responseName.POST_CREATED)
    async updateScore(@Body() updateScoreDTO: UpdateScoreDTO) {
        return await this.matchService.updateScore(updateScoreDTO);
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    @ResponseCustom(responseName.GET_POST)
    async getMatchById(@Param() params: GetMatchPathParams) {
        return await this.matchService.getMatchById(params.id);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    @ResponseCustom(responseName.GET_ALL_MATCHES)
    async getAllMatches() {
        return await this.matchService.getAllMatches();
    }
}
