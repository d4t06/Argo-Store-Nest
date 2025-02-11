import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';

// class
@Controller('auth')
// @Roles(Role.Admin, Role.User)
export class AuthController {
  // route handler
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  signIn(
    @Body() dto: LoginDto,
    //  @Res({ passthrough: true }) response: Response,
  ) {
    return this.authService.signIn(dto.username, dto.password);
  }

  @Post('/register')
  @UsePipes(ValidationPipe)
  register(@Body() createDto: CreateUserDto) {
    return this.authService.register(createDto);
  }
}
