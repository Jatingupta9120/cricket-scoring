import {
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
} from 'sequelize-typescript';
import { MatchEntity } from 'src/module/match/entity/match.entity';

@Table({ tableName: 'extras' })
export class Extras extends Model<Extras> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
        comment: 'Extras ID',
    })
    id: string;

    @ForeignKey(() => MatchEntity)
    @Column({
        type: DataType.STRING,
        allowNull: false,
        comment: 'Match ID the extras are associated with',
    })
    matchId: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    type: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    runs: number;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
        comment: 'Wides in the match',
    })
    wide: number;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
        comment: 'No-balls in the match',
    })
    noball: number;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
        comment: 'Byes in the match',
    })
    byes: number;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
        comment: 'Legbyes in the match',
    })
    legbyes: number;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
        comment: 'Overthrows in the match',
    })
    overthrows: number;
}
