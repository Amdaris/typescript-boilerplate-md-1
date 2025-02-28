import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { Challenge3Service } from './challenge3.service';


@Controller()
export class Challenge3Controller {
  constructor(
    private readonly challenge3Service: Challenge3Service,
  ) { }

  @Post('/challenge-3')
  @HttpCode(200)
  getResult(@Body() body: { order: string }) {
    return this.challenge3Service.getResult(body.order);
  }
}
