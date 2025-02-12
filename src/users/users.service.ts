import { ConflictException, Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly entityManager: EntityManager,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOne(phoneNumber: string) {
    return await this.userRepository.findOne({
      where: { phone_number: phoneNumber },
    });
  }

  async addOne(user: CreateUserDto) {
    const foundedUser = await this.userRepository.findOne({
      where: {
        phone_number: user.phone_number,
      },
    });

    if (foundedUser) throw new ConflictException('Phone number had taken');

    await this.userRepository.save(user);

    return 'Ok';
  }

  async updateFreshToken(newToken: string, username: string) {
    return await this.entityManager
      .createQueryBuilder(User, 'user')
      .update()
      .set({
        refresh_token: newToken,
      })
      .where('username = :username', { username: username })
      .execute();
  }
}
