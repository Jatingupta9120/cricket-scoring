import { IsUUID } from 'class-validator';
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator'; // For validation

export class CreateTeamDTO {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    captain: string;
}

export class UpdateTeamDTO {
    @IsString()
    @IsOptional()
    name?: string; // Optional field to update team name

    @IsString()
    @IsOptional()
    captain?: string; // Optional field to update captain's name

    @IsInt()
    @IsOptional()
    @Min(0)
    totalRuns?: number; // Optional field to update total runs scored by the team

    @IsInt()
    @IsOptional()
    @Min(0)
    totalWickets?: number; // Optional field to update total wickets taken by the team

    @IsInt()
    @IsOptional()
    @Min(0)
    totalExtras?: number; // Optional field to update total extras awarded to the team
}

export class TeamResponseDTO {
    id: string;
    name: string;
    captain: string;
    totalRuns: number;
    totalWickets: number;
    totalExtras: number;
}

export class UpdateScoreDTO {
    @IsUUID()
    @IsString()
    matchId: string; // The ID of the match to update

    @IsString()
    scenario: string; // Scenario for the update (e.g., wide, noball, etc.)

    @IsInt()
    @Min(0)
    runs: number; // The number of runs to be added

    @IsOptional()
    @IsUUID()
    batsmanId?: string; // ID of the batsman (if applicable to the scenario)

    @IsOptional()
    @IsUUID()
    bowlerId?: string; // ID of the bowler (if applicable to the scenario)

    @IsOptional()
    @IsInt()
    extras?: number; // Extras (e.g., wides, no-balls, byes) to be added to the score

}
