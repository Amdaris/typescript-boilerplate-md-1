import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { Challenge2Service } from './challenge2.service';


@Controller()
export class Challenge2Controller {
  constructor(private readonly challenge2Service: Challenge2Service) { }

  @Post('/challenge-2')
  @HttpCode(200)
  getResult(@Body() body: number[]) {
    return this.challenge2Service.getResult(body);
  }
}
