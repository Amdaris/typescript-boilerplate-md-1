import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { Challenge3Service } from './challenge3.service';
import { Challenge3Request } from './dto/challenge3-request.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class Challenge3Controller {
  constructor(
    private readonly challenge3Service: Challenge3Service,
  ) { }

  @Post('/challenge-3')
  @HttpCode(200)
  @ApiResponse({ type: String })
  getResult(@Body() body: Challenge3Request): string {
    return this.challenge3Service.getResult(body.order);
  }
}
