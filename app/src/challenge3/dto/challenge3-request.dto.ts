import { ApiProperty } from "@nestjs/swagger";

export class Challenge3Request {
    @ApiProperty({ nullable: false })
    order: string;
}