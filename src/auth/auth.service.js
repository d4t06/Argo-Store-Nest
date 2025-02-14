"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async signIn(phoneNumber, password) {
        const foundedUser = await this.userService.findOne(phoneNumber);
        if (!foundedUser || foundedUser.password !== password)
            throw new common_1.UnauthorizedException();
        const newToken = await this.jwtService.signAsync({
            storeName: foundedUser.store_name,
            role: foundedUser.role,
        }, { expiresIn: '2d' });
        return {
            token: newToken,
            storeName: foundedUser.store_name,
            userId: foundedUser.id
        };
    }
    async register(dto) {
        const PWD_REGEX = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        const PHONE_REGEX = /(0[3|5|7|8|9])+([0-9]{8})\b/g;
        const isValidPhone = PHONE_REGEX.test(dto.phone_number);
        const isValidPassword = PWD_REGEX.test(dto.password);
        if (!isValidPassword || !isValidPassword)
            throw new common_1.BadRequestException();
        Object.assign(dto, { store_name: dto.phone_number + '\'s Store' });
        return await this.userService.addOne(dto);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map