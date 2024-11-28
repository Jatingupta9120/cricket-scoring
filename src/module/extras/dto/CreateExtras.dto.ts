import { IsString, IsNumber, IsOptional, IsDateString } from 'class-validator';

export class CreateExtraDTO {
    // The matchId will link this extra event to a specific match
    @IsString()
    matchId: string;

    // The type of extra (e.g., no-ball, wide, legbye)
    @IsString()
    type: string;

    // The number of runs scored as part of this extra event
    @IsNumber()
    runs: number;

    // Optional description or note (e.g., "no-ball with bye")
    @IsOptional()
    @IsString()
    description?: string;

    // Timestamp of when the extra event occurred
    @IsDateString()
    timestamp: string; // The timestamp when the extra occurred
}

export class UpdateExtraDTO {
    // The matchId will link this extra event to a specific match
    @IsOptional()
    @IsString()
    matchId?: string;

    // The type of extra (e.g., no-ball, wide, legbye)
    @IsOptional()
    @IsString()
    type?: string;

    // The number of runs scored as part of this extra event
    @IsOptional()
    @IsNumber()
    runs?: number;

    // Optional description or note (e.g., "no-ball with bye")
    @IsOptional()
    @IsString()
    description?: string;

    // Timestamp of when the extra event occurred
    @IsOptional()
    @IsDateString()
    timestamp?: string; // The timestamp when the extra occurred
}

export class ExtraResponseDTO {
    // Unique identifier for the extra
    @IsString()
    id: string;

    // Match ID that this extra is associated with
    @IsString()
    matchId: string;

    // Type of extra (e.g., no-ball, wide, legbye)
    @IsString()
    type: string;

    // The number of runs associated with this extra
    @IsNumber()
    runs: number;

    // Description or any additional context (e.g., "no-ball with bye")
    @IsOptional()
    @IsString()
    description?: string;

    // Timestamp of when the extra event occurred
    @IsDateString()
    timestamp: string;
}

// DTO for extracting path parameter 'id' for a specific extras record
export class GetExtrasPathParams {
    @IsString()
    id: string; // ID of the extras record
}
