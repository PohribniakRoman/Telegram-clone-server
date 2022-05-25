import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class CatsService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}


}
