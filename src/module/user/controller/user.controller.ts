import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { responseName } from '../../../constants/response';
import { Response as ResponseCustom } from '../../../utils/response/response.decorator';
import { UserService } from '../service/user.service';
import { CreateUserDTO, GetUserPathParams } from '../dto/create_user.dto';
import { userresponseName } from 'src/constants/response/user/user_response.constants';

@Controller()
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    @ResponseCustom(userresponseName.USER_CREATED)
    async createUser(@Body() createUserDTO: CreateUserDTO) {
        return await this.userService.createUser(createUserDTO);
    }

    @Get()
    @ResponseCustom(userresponseName.GET_ALL_USER)
    async getAllUser() {
        return await this.userService.getAllUser();
    }

    @Get('/:id')
    @ResponseCustom(responseName.GET_USER)
    async getUserById(@Param() { id }: GetUserPathParams) {
        return await this.userService.getUserById(id);
    }
}
