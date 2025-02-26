import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  phone_number: string;
  
  @IsNotEmpty()
  password: string;
}
