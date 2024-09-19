import {
  Controller,
  Get,
  Post,
  Body,
  Param,
} from '@nestjs/common';
import { GitHistoryService } from 'github-history-domain';

@Controller('history')
export class HistoryController {

  constructor(private gitHistoryService: GitHistoryService) {}

  @Get()
  async create() {
    return this.gitHistoryService.getHistoryCommitInfo('GabrielL915', 'auth-api');
  }
}
