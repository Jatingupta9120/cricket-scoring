import { Injectable } from '@nestjs/common';
import { USER_ERROR } from '../../../constants/error';
import { HttpExceptionWrapper } from '../../../utils/error/error.http.wrapper';
import { UserRepository } from '../repository/user.repository';
import { CreateUserDTO } from '../dto/create_user.dto';

@Injectable()
export class UserService {
    constructor(private userRepository: UserRepository) {}

    async createUser(createUserDTO: CreateUserDTO) {
        const user = await this.userRepository.getByEmail(createUserDTO?.email);
        if (user) {
            throw new HttpExceptionWrapper(USER_ERROR.USER_EMAIL_EXIST);
        }

        const createdUser = await this.userRepository.create(createUserDTO);
        return createdUser.toJSON();
    }

    async getAllUser() {
        const users = await this.userRepository.getAll();
        return users;
    }

    async getUserById(id: string) {
        const user = await this.userRepository.getById(id);
        if (!user) {
            throw new HttpExceptionWrapper(USER_ERROR.USER_NOT_EXIST);
        }
        return user;
    }
}
