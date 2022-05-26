import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth/auth.controller';
import { UserModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://Admin:admin@cluster0.rb5jf.mongodb.net/?retryWrites=true&w=majority"),UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
