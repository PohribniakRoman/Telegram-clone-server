import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppGateway } from './app.gateway';
import { UserModule } from './auth/auth.module';
import { LoginModule } from './login/login.module';
import { SessionModule } from './session/session.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://Admin:admin@cluster0.rb5jf.mongodb.net/?retryWrites=true&w=majority"),UserModule,LoginModule,SessionModule],
  providers:[AppGateway]
})
export class AppModule {}
