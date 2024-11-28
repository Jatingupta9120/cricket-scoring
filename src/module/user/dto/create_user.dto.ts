import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UserDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID(4)
    id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string;

    @Type(() => Date)
    birthDate: Date;
}

export class CreateUserDTO extends OmitType(UserDTO, ['id'] as const) {}

export class GetUserPathParams {
    @IsNotEmpty()
    @IsUUID(4)
    id: string;
}
