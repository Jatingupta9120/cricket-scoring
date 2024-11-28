import {
    Column,
    DataType,
    Model,
    Table,
    HasMany,
    BelongsToMany,
} from 'sequelize-typescript';
import { Batsman } from 'src/module/batsman/entity/batsman.entity';
import { Bowler } from 'src/module/bowler/entity/bowlerEntity.dto';
import { MatchEntity } from 'src/module/match/entity/match.entity';
import { MatchTeams } from 'src/module/match/entity/matchTeams.entity';

@Table({
    tableName: 'teams',
    timestamps: false,
})
export class TeamEntity extends Model<TeamEntity> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
        comment: 'Unique team identifier',
    })
    id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        comment: 'Team name',
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        comment: 'Team captain name',
    })
    captain: string;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
        comment: 'Total runs scored by the team in the match',
    })
    totalRuns: number;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
        comment: 'Total wickets taken by the team in the match',
    })
    totalWickets: number;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
        comment: 'Total extras awarded to the team in the match',
    })
    totalExtras: number;

    @HasMany(() => Batsman)
    batsmen: Batsman[];

    @HasMany(() => Bowler)
    bowlers: Bowler[];

    @HasMany(() => MatchTeams)
    matchTeams: MatchTeams[];
}
