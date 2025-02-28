import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { Challenge1Service } from './challenge1.service';

@Controller()
export class Challenge1Controller {
  constructor(private readonly challenge1Service: Challenge1Service) { }

  @Post('/challenge-1')
  @HttpCode(200)
  getResult(@Body() body: number[]) {
    return this.challenge1Service.getResult(body);
  }
}
