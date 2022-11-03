import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "src/schemas/user.schema";

export class SearchService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

    async findAllUsers(){
        return await this.userModel.find();
    }
}