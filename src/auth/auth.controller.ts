import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async authorizeUser(@Body() authDto: AuthDto, @Res() res: Response) {
   const userExists = await this.authService.findUserByName(authDto.name)
   if (!userExists) {
       await this.authService.saveUser(authDto);
       res.status(200).send({authorized:true})
   }else{
       res.status(404).send({authorized:false})
   }
}
}
