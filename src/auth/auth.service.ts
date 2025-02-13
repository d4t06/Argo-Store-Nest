import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(phoneNumber: string, password: string) {
    const foundedUser = await this.userService.findOne(phoneNumber);

    if (!foundedUser || foundedUser.password !== password)
      throw new UnauthorizedException();

    const newToken = await this.jwtService.signAsync(
      {
        storeName: foundedUser.store_name,
        role: foundedUser.role,
      },
      { expiresIn: '2d' },
    );

    return {
      token: newToken,
      storeName: foundedUser.store_name,
      userId: foundedUser.id
    };
  }

  async register(dto: CreateUserDto) {
    const PWD_REGEX = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const PHONE_REGEX = /(0[3|5|7|8|9])+([0-9]{8})\b/g;

    const isValidPhone = PHONE_REGEX.test(dto.phone_number);
    const isValidPassword = PWD_REGEX.test(dto.password);

    if (!isValidPassword || !isValidPassword) throw new BadRequestException();

    Object.assign(dto,{store_name: dto.phone_number+'\'s Store'} as Partial<CreateUserDto>)

    return await this.userService.addOne(dto);
  }
}
