import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    signIn(phoneNumber: string, password: string): Promise<{
        token: string;
        storeName: string;
        userId: number;
    }>;
    register(dto: CreateUserDto): Promise<string>;
}
