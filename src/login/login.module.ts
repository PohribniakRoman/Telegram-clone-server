import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Session, SessionSchema } from "src/schemas/session.schema";
import { User, UserSchema } from "src/schemas/user.schema";
import { LoginController } from "./login.controller";
import { LoginService } from "./login.service";

@Module({
    imports:[MongooseModule.forFeature([{ name: Session.name, schema: SessionSchema }]),MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers:[LoginController],
    providers:[LoginService]
})

export class LoginModule {}