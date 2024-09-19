import {
  Controller,
  Get,
  Post,
  Body,
  Param,
} from '@nestjs/common';
import { HistoryDomain } from 'github-history-domain';

@Controller('history')
export class HistoryController {

  constructor(private historyDomain: HistoryDomain) {}

  @Get()
  async create() {
    return this.historyDomain.getHistoryCommitInfo('GabrielL916', 'auth-api');
  }
}
