import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Session, SessionDocument } from "src/schemas/session.schema";

@Injectable()
export class SessionService {
    constructor(@InjectModel(Session.name) private sessionModel: Model<SessionDocument>){}
    
    async findToken(token){
        return await this.sessionModel.findOne({sessionId:token})
    }


}