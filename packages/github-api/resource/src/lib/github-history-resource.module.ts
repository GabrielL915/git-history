import { Module } from '@nestjs/common';
import { HistoryDomain } from 'github-history-domain';
import { HistoryController } from './history.controller';

@Module({
  controllers: [HistoryController],
  providers: [HistoryDomain],
  exports: [],
})
export class GithubApiResourceModule {}
