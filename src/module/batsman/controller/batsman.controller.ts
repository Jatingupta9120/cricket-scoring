// src/modules/match/batsman.controller.ts
import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    Delete,
    HttpCode,
    HttpStatus,
} from '@nestjs/common'; // Import the Batsman Service // Import the DTOs for creating and updating batsmen
import { Response as ResponseCustom } from '../../../utils/response/response.decorator';
import { responseName } from 'src/constants/response'; // Define response names
import { BatsmanService } from '../service/batsman.service';
import {
    CreateBatsmanDTO,
    GetUserPathParams,
    UpdateBatsmanDTO,
} from '../dto/Createbatsman.dto';

@Controller('batsmen') // Define the route as '/batsmen'
export class BatsmanController {
    constructor(private readonly batsmanService: BatsmanService) {}

    // Create a new batsman record
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ResponseCustom(responseName.BATS_MAN_CREATED)
    async createBatsman(@Body() createBatsmanDTO: CreateBatsmanDTO) {
        return await this.batsmanService.create(createBatsmanDTO);
    }

    // Get a list of all batsmen
    @Get()
    @HttpCode(HttpStatus.OK)
    @ResponseCustom(responseName.GET_ALL_BATSMEN)
    async getAllBatsmen() {
        return await this.batsmanService.getAll(); 
    }

    // Get a specific batsman by ID
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    @ResponseCustom(responseName.GET_BATSMAN)
    async getBatsmanById(@Param() { id }: GetUserPathParams) {
        return await this.batsmanService.getById(id);
    }

    // Update an existing batsman record
    @Put('/:id')
    @HttpCode(HttpStatus.OK)
    @ResponseCustom(responseName.BATS_MAN_UPDATED)
    async updateBatsman(
        @Param() { id }: GetUserPathParams, 
        @Body() updateBatsmanDTO: UpdateBatsmanDTO, 
    ) {
        return await this.batsmanService.update(id, updateBatsmanDTO);
    }

    // Delete a batsman record by ID
    @Delete('/:id')
    @HttpCode(HttpStatus.OK)
    @ResponseCustom(responseName.BATS_MAN_DELETED)
    async deleteBatsman(@Param() { id }: GetUserPathParams) {
        return await this.batsmanService.delete(id);
    }
}
