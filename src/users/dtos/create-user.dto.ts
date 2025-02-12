import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  phone_number: string;

  @IsNotEmpty()
  password: string;

  role: string;

  store_name: string;
}
