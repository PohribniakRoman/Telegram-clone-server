import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { SearchService } from './search.service';

@Controller("search")
export class SerachController {
    constructor(private SearchService:SearchService ) {}

    @Get()
    async getAllUsers(@Res() res:Response){
        const parsedData = []
        const data = await this.SearchService.findAllUsers();
        data.forEach(e=>{parsedData.push(e.name)})
        res.status(200).send({parsedData});   
    }
}