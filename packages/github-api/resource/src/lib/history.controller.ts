import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  ValidationPipe,
} from '@nestjs/common';
import { ApiInfoDto, GitHistoryService } from 'github-history-domain';

@Controller('history')
export class HistoryController {
  constructor(private gitHistoryService: GitHistoryService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async getCommitHistory(
    @Body(new ValidationPipe({ transform: true })) apiInfoDto: ApiInfoDto
  ) {
    return this.gitHistoryService.getHistoryCommitInfo(apiInfoDto);
  }
}
