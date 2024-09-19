import { Module } from '@nestjs/common';
import { HistoryController } from './history.controller';
import { GitHistoryService } from 'github-history-domain';

@Module({
  controllers: [HistoryController],
  providers: [GitHistoryService],
  exports: [],
})
export class GithubApiResourceModule {}
