import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Session, SessionDocument } from "src/schemas/session.schema";
import { User, UserDocument } from "src/schemas/user.schema";

@Injectable()
export class LoginService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,@InjectModel(Session.name) private sessionModel: Model<SessionDocument>){}
    
    async genSession(id){
        console.log((await this.userModel.find({}))[0]._id.toString())
    }
}