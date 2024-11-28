import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../dto/create_user.dto';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class UserRepository {
    async create(createUserDTO: CreateUserDTO) {
        return await UserEntity.create(createUserDTO);
    }

    async getAll() {
        return await UserEntity.findAndCountAll();
    }

    async getById(id: string) {
        return await UserEntity.findByPk(id);
    }

    async getByEmail(email: string) {
        return await UserEntity.findOne({
            where: { email },
        });
    }
}
