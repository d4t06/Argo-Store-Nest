import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string) {
    const foundedUser = await this.userService.findOne(username);

    if (!foundedUser || foundedUser.password !== pass) {
      throw new UnauthorizedException();
    }

    const newToken = await this.jwtService.signAsync(
      {
        username: username,
        role: foundedUser.role,
      },
      { expiresIn: '2d' },
    );

    return {
      token: newToken,
      user: {
        name: username,
        role: foundedUser.role,
      },
    };
  }

  async register(createUserDto: CreateUserDto) {
    return await this.userService.addOne(createUserDto);
  }
}
