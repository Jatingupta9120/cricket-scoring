import {
    IsInt,
    IsString,
    IsOptional,
    Min,
    IsNotEmpty,
    IsUUID,
} from 'class-validator';

export class CreateBatsmanDTO {
    @IsString()
    @IsOptional()
    id: string;

    @IsString()
    name: string;

    @IsString()
    matchId: string;

    @IsInt()
    @Min(0)
    runs: number;

    @IsInt()
    @Min(0)
    ballsFaced: number;

    @IsInt()
    @Min(0)
    fours: number;

    @IsInt()
    @Min(0)
    sixes: number;
}

export class UpdateBatsmanDTO {
    @IsString()
    @IsOptional()
    name?: string;

    @IsInt()
    @IsOptional()
    @Min(0)
    runs?: number;

    @IsInt()
    @IsOptional()
    @Min(0)
    ballsFaced?: number;

    @IsInt()
    @IsOptional()
    @Min(0)
    fours?: number;

    @IsInt()
    @IsOptional()
    @Min(0)
    sixes?: number;
}

export class GetUserPathParams {
    @IsNotEmpty()
    @IsUUID(4)
    id: string;
}
