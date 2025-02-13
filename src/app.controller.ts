import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type','text/html')
  getHello(): {name: string} {
    return {name: 'Max'};
  }
}
//controllers are important for handling requests and sending back responses
//this decorater has to filter for path ()