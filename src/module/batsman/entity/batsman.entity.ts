import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
} from 'sequelize-typescript';
import { MatchEntity } from 'src/module/match/entity/match.entity';
import { TeamEntity } from 'src/module/team/entity/team.entity';

@Table({ tableName: 'batsmen' })
export class Batsman extends Model<Batsman> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
        comment: 'Batsman ID',
    })
    id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        comment: 'Batsman name',
    })
    name: string;

    @ForeignKey(() => MatchEntity)
    @Column({
        type: DataType.STRING,
        allowNull: false,
        comment: 'Match ID the batsman is associated with',
    })
    matchId: string;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
        comment: 'Total runs scored by the batsman',
    })
    runs: number;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
        comment: 'Balls faced by the batsman',
    })
    ballsFaced: number;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
        comment: 'Number of fours hit by the batsman',
    })
    fours: number;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
        comment: 'Number of sixes hit by the batsman',
    })
    sixes: number;

    @ForeignKey(() => TeamEntity)
    @Column
    teamId: string;

    @BelongsTo(() => TeamEntity)
    team: TeamEntity;
}
