import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubApiResourceModule } from 'github-history-resource';

@Module({
  imports: [GithubApiResourceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
