// src/modules/match/bowler.controller.ts
import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Put,
    Delete,
} from '@nestjs/common';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { responseName } from 'src/constants/response'; // Custom response decorator
import { CreateBowlerDTO, UpdateBowlerDTO } from '../dto/CreateBowler.dto';
import { BowlerService } from '../service/bowler.service';

@Controller('bowlers') // Define the base route for bowler-related endpoints
export class BowlerController {
    constructor(private readonly bowlerService: BowlerService) {}

    // Endpoint to create a new bowler
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ResponseCustom(responseName.BOWLER_CREATED) // Custom response for created bowler
    async createBowler(@Body() bowlerDTO: CreateBowlerDTO) {
        return this.bowlerService.createBowler(bowlerDTO);
    }

    // Endpoint to get all bowlers
    @Get()
    @HttpCode(HttpStatus.OK)
    @ResponseCustom(responseName.GET_ALL_BOWLERS) // Custom response for getting all bowlers
    async getAllBowlers() {
        return this.bowlerService.getAllBowlers();
    }

    // Endpoint to get a bowler by ID
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    @ResponseCustom(responseName.GET_BOWLER) // Custom response for a single bowler
    async getBowlerById(@Param('id') id: string){
        return this.bowlerService.getBowlerById(id);
    }

    // Endpoint to update a bowler's details
    @Put('/:id')
    @HttpCode(HttpStatus.OK)
    @ResponseCustom(responseName.BOWLER_UPDATED) // Custom response for updated bowler
    async updateBowler(
        @Param('id') id: string,
        @Body() bowlerDTO: UpdateBowlerDTO,
    ) {
        return this.bowlerService.updateBowler(id, bowlerDTO);
    }

    // Endpoint to delete a bowler by ID
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ResponseCustom(responseName.BOWLER_DELETED) // Custom response for deleted bowler
    async deleteBowler(@Param('id') id: string) {
        return this.bowlerService.deleteBowler(id);
    }
}
