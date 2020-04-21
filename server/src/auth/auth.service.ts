import { Injectable, ConflictException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from '../users/interfaces/user.interface';
import { UserDto } from '../users/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> | never {
    const user: User = await this.usersService.findByEmail(email);
    if (user) {
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (isPasswordMatch) {
        return user;
      }
    }
    return null;
  }

  async register(userDto: UserDto) {
    const isUserExist = !!(await this.usersService.findByEmail(userDto.email));
    if (isUserExist) {
      throw new ConflictException();
    }

    const user: User = await this.usersService.add(userDto);
    return this.getToken(user);
  }

  async getToken({ _id }: User): Promise<string> {
    const payload = { sub: _id };
    return this.jwtService.sign(payload);
  }
}
