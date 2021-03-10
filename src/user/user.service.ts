import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  public async create(data: User) {
    const created = new this.userModel(data);
    return created.save();
  }

  public findByName(name: string): Promise<User> {
    return this.userModel.findOne({ name }).select('password user').lean().exec();
  }
}
