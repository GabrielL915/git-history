import { IsString, IsNotEmpty } from 'class-validator';

export class ApiInfoDto {
  @IsString()
  @IsNotEmpty()
  token!: string;

  @IsString()
  @IsNotEmpty()
  owner!: string;

  @IsString()
  @IsNotEmpty()
  repo!: string;
}
