import { UUIDV4 } from 'sequelize';
import { Column, DataType, Model, Table, HasMany } from 'sequelize-typescript';
import { Batsman } from 'src/module/batsman/entity/batsman.entity';
import { Bowler } from 'src/module/bowler/entity/bowlerEntity.dto';
import { Extras } from 'src/module/extras/entity/extrasEntity.dto';
import { MatchTeams } from './matchTeams.entity';
@Table
export class MatchEntity extends Model<MatchEntity> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
        primaryKey: true,
        defaultValue: UUIDV4,
    })
    id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        comment: 'Match description or name',
    })
    name: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        comment: 'Start date and time of the match',
    })
    startDate: Date;

    @Column({
        type: DataType.DATE,
        allowNull: true,
        comment: 'End date and time of the match',
    })
    endDate: Date;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        comment: 'Status of the match (e.g., "in-progress", "completed")',
    })
    status: string;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
        comment: 'Total runs scored in the match',
    })
    totalRuns: number;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
        comment: 'Total wickets fallen in the match',
    })
    totalWickets: number;

    @Column({
        type: DataType.JSONB,
        allowNull: true,
        comment: 'Match stats like total overs, extras, etc.',
    })
    matchStats: any;

    @HasMany(() => Batsman)
    batsmen: Batsman[];

    @HasMany(() => Bowler)
    bowlers: Bowler[];

    @HasMany(() => Extras)
    extras: Extras[];

    @HasMany(() => MatchTeams)
    matchTeams: MatchTeams[];
}
