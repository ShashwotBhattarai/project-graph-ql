import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../database/user.schema';
import { Model } from 'mongoose';
import { CreateUserInput } from '../input-type/user.input';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModle: Model<UserDocument>) {}

  async createUser(createUserInput: CreateUserInput): Promise<User> {
    try {
      const newUser = await this.userModle.create(createUserInput);
      return newUser;
    } catch (error) {
      return error;
    }
  }

  async getAllUsers(): Promise<User[]> {
    try {
      const allUsers = await this.userModle.find({});
      return allUsers;
    } catch (error) {
      return error;
    }
  }
}
