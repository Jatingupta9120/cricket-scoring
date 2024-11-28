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

@Table({ tableName: 'bowlers' })
export class Bowler extends Model<Bowler> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
        comment: 'Bowler ID',
    })
    id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        comment: 'Bowler name',
    })
    name: string;

    @ForeignKey(() => MatchEntity)
    @Column({
        type: DataType.STRING,
        allowNull: false,
        comment: 'Match ID the bowler is associated with',
    })
    matchId: string;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
        comment: 'Number of overs bowled by the bowler',
    })
    overs: number;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
        comment: 'Wickets taken by the bowler',
    })
    wickets: number;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
        comment: 'Number of runs conceded by the bowler',
    })
    runsConceded: number;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
        comment: 'Number of dots balls bowled by the bowler',
    })
    dotBalls: number;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
        comment: 'Number of balls bowled by the bowler',
    })
    balls: number;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
        comment: 'Number of no-balls bowled by the bowler',
    })
    noBalls: number;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
        comment: 'Number of wide balls bowled by the bowler',
    })
    wides: number;

    @ForeignKey(() => TeamEntity)
    @Column({
        type: DataType.STRING,
        allowNull: false,
        comment: 'Team ID the bowler is associated with',
    })
    teamId: string;

    @BelongsTo(() => TeamEntity) // Bowler belongs to TeamEntity
    team: TeamEntity;
}
