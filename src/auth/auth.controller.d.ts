import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(dto: LoginDto): Promise<{
        token: string;
        storeName: string;
        userId: number;
    }>;
    register(createDto: CreateUserDto): Promise<string>;
}
