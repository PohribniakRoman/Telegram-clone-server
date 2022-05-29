import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  genPassword(password: string): string {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash
  }

  async saveUser({ name, password }): Promise<any>  {
    const hash = this.genPassword(password)
    const newUser = new this.userModel({ name, password: hash });
    await newUser.save();
    return newUser._id.toString()
  }
  async findUserByName(userName){
    return await this.userModel.findOne({name:userName})
  }
}
