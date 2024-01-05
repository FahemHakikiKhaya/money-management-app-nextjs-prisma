import { Transform } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class GetTransaksiDTO {
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  transaksiTipeId: number;

  @IsOptional()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  limit: number;
}
