import { IsString, IsDate, IsOptional, IsUUID, IsArray } from 'class-validator';

export class CreateMatchDTO {
    @IsUUID()
    id: string; // Unique match ID

    @IsString()
    name: string; // Match name or description

    @IsString()
    teams: string; // Teams involved in the match

    @IsDate()
    startDate: Date; // Match start date

    @IsOptional()
    @IsDate()
    endDate?: Date; // Match end date (optional)

    @IsString()
    status: string; // Match status

    totalRuns: number; // Total runs scored in the match

    totalWickets: number; // Total wickets fallen

    @IsOptional()
    matchStats?: any; // Match stats (optional)

    @IsArray()
    @IsOptional()
    batsmen?: string[]; // List of batsmen (optional)

    @IsArray()
    @IsOptional()
    bowlers?: string[]; // List of bowlers (optional)

    @IsArray()
    @IsOptional()
    extras?: string[]; // List of extras (optional)
}

export class UpdateMatchDTO {
    @IsString()
    @IsOptional()
    name?: string; // Match name or description

    @IsString()
    @IsOptional()
    teams?: string; // Teams involved in the match

    @IsDate()
    @IsOptional()
    startDate?: Date; // Match start date

    @IsDate()
    @IsOptional()
    endDate?: Date; // Match end date (optional)

    @IsString()
    @IsOptional()
    status?: string; // Match status

    @IsOptional()
    totalRuns?: number; // Total runs scored in the match

    @IsOptional()
    totalWickets?: number; // Total wickets fallen
}

export class GetMatchPathParams{
    @IsUUID()
    id: string; // Unique match ID
}