import { Body, Controller,Post } from '@nestjs/common';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @Post()
    async defineUseer(@Body() authDto:AuthDto):Promise<any>{
       await this.authService.saveUser(authDto)
    }

}
