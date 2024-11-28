import { IsString, IsInt, IsOptional, Min, IsUUID } from 'class-validator';

export class CreateBowlerDTO {
    @IsUUID()
    id: string;

    @IsString()
    name: string;

    @IsUUID()
    matchId: string;

    @IsInt()
    @Min(0)
    overs: number;

    @IsInt()
    @Min(0)
    wickets: number;

    @IsInt()
    @Min(0)
    runsConceded: number;

    @IsInt()
    @Min(0)
    wides: number;

    @IsInt()
    @Min(0)
    noBalls: number;

    @IsInt()
    @Min(0)
    maidens: number;

    @IsInt()
    @Min(0)
    dotBalls: number;

    @IsInt()
    @Min(0)
    balls: number;
}

export class UpdateBowlerDTO {
    @IsUUID()
    id: string;

    @IsString()
    @IsOptional()
    name?: string;

    @IsUUID()
    @IsOptional()
    matchId?: string;

    @IsInt()
    @Min(0)
    @IsOptional()
    overs?: number;

    @IsInt()
    @Min(0)
    @IsOptional()
    wickets?: number;

    @IsInt()
    @Min(0)
    @IsOptional()
    runsConceded?: number;

    @IsInt()
    @Min(0)
    @IsOptional()
    wides?: number;

    @IsInt()
    @Min(0)
    @IsOptional()
    noBalls?: number;

    @IsInt()
    @Min(0)
    @IsOptional()
    maidens?: number;

    @IsInt()
    @Min(0)
    @IsOptional()
    dotBalls?: number;

    @IsInt()
    @Min(0)
    @IsOptional()
    balls?: number;
}
