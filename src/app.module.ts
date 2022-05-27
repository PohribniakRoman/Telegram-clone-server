import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './auth/auth.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://Admin:admin@cluster0.rb5jf.mongodb.net/?retryWrites=true&w=majority"),UserModule,LoginModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
