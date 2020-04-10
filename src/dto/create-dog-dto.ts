
import { IsString, IsInt, MaxLength, MinLength, Min, Max } from 'class-validator';

export class CreateDogDto {
  @IsString()
  @MinLength(5)
  @MaxLength(10)
  name: string;

  @IsInt()
  @Min(20)
  @Max(80)
  age: number;

  @IsString()
  @MinLength(5)
  @MaxLength(15)
  breed: string;
}