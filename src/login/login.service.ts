import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Session, SessionDocument } from "src/schemas/session.schema";
import { User, UserDocument } from "src/schemas/user.schema";
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class LoginService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,@InjectModel(Session.name) private sessionModel: Model<SessionDocument>){}
    
    async findUserByName(userName){
        return await this.userModel.findOne({name:userName})
    }

    async comparePasswords(password,hash){
    return bcrypt.compareSync(password,hash)
    }
    
    async generateToken(name){
        const token = `${name}-//-${uuidv4()}`
        const newSession = new this.sessionModel({sessionId:token})
        await newSession.save();
        return token;
    }
}