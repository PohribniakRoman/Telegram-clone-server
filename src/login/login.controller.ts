import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { LoginDto } from './login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post()
  async checkUserData(@Body() loginDto: LoginDto,@Res() res:Response) {
    const user = await this.loginService.findUserByName(loginDto.name);
    if (user) {
      const comparePasswords = await this.loginService.comparePasswords(
        loginDto.password,
        user.password,
      );
        if (comparePasswords) {
            const token = await this.loginService.generateToken(loginDto.name);
            res.status(201).send({authorized:true,token})
        }
    }
  }
}
