import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor(private loginService:LoginService){}

    @Get()
    genSession1(){
            this.loginService.genSession("qw")
    }
}
