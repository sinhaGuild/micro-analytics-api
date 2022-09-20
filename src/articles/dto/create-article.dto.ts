import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
  @ApiProperty()
  title: string;

  @ApiProperty({ required: false, nullable: true })
  content: string;

  @ApiProperty({ required: false })
  published?: boolean = false;

  @ApiProperty({ required: false })
  author: string;
}
