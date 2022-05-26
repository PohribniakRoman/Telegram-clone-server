import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async genPassword(password: string): Promise<any> {
    const saltRounds = 10;
    console.log(saltRounds);
    return bcrypt.genSalt(saltRounds,async function (err, salt) {
      console.log(salt);
     return bcrypt.hash(password, salt,async function (err, hash) {
        console.log(hash);
        return hash;
      });
    });
  }

  async saveUser({ name, password }): Promise<any>  {
    
    const hash = await (await this.genPassword(password));
    console.log( hash);
    
    const newUser = new this.userModel({ name, password: hash });
    await newUser.save();
  }
}
