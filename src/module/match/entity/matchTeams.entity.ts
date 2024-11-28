import {
    Column,
    DataType,
    Model,
    Table,
    ForeignKey,
} from 'sequelize-typescript';
import { MatchEntity } from 'src/module/match/entity/match.entity';
import { TeamEntity } from 'src/module/team/entity/team.entity';

@Table
export class MatchTeams extends Model<MatchTeams> {
    @ForeignKey(() => MatchEntity)
    @Column({
        type: DataType.STRING,
        allowNull: false,
        comment: 'Match ID',
    })
    matchId: string;

    @ForeignKey(() => TeamEntity)
    @Column({
        type: DataType.STRING,
        allowNull: false,
        comment: 'Team ID',
    })
    teamId: string;
}
