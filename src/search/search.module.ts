import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Session, SessionSchema } from "src/schemas/session.schema";
import { User, UserSchema } from "src/schemas/user.schema";
import { SerachController } from "./search.controller";
import { SearchService } from "./search.service";


@Module({
    imports:[MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers:[SerachController],
    providers:[SearchService]
})

export class SearchModule {};