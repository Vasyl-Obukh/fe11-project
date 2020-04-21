import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {}

  async add(user: UserDto): Promise<User> {
    const createdUser = await this.userModel(user);
    return createdUser.save();
  }

  getAll(): Promise<User[]> {
    return this.userModel.find();
  }

  findByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email });
  }

  findById(id: string): Promise<User> {
    return this.userModel.findById(id);
  }
}
