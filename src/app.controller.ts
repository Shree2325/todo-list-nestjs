import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTasks(@Req() req , @Res() res){
    return 
  }

  getUserTasks(@Req() req , @Res() res){
    return
  }

  addTask(){
    
  }
}
