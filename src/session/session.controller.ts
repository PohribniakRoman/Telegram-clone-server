import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { SessionDto } from './session.dto';
import { SessionService } from './session.service';

@Controller('session')
export class SessionController {
  constructor(private sessionService: SessionService) {}

  @Post()
  async checkUserData(@Body() sessionDto: SessionDto,@Res() res:Response) {
    const isTokenExist = await this.sessionService.findToken(sessionDto.token);
    if (isTokenExist) {
        res.status(201).send({authorized:true})
    }else{
        res.status(201).send({authorized:false})
    }
  }
}
