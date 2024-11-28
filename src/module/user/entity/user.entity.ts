import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { UserDTO } from '../dto/create_user.dto';
@Table({ tableName: 'user' })
export class UserEntity extends Model<UserDTO> {
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    id: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    name: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
        unique: true,
    })
    email: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
        unique: true, // Assuming username should be unique
    })
    username: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    password: string;

    @Column({
        allowNull: false,
        type: DataType.DATEONLY, // Assuming birthdate is a date without time
    })
    birthdate: Date;


}
