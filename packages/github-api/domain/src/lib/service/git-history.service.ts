import { gitHistoryApi } from 'git-history-api';
import { ApiInfoDto } from '../dto/api-info.dto';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class GitHistoryService {
  private readonly logger = new Logger(GitHistoryService.name);

  public async getHistoryCommitInfo(apiInfoDto: ApiInfoDto) {
    try {
      return await gitHistoryApi(
        apiInfoDto.token,
        apiInfoDto.owner,
        apiInfoDto.repo
      );
    } catch (error: any) {
      this.logger.error(
        `Failed to get commit history: ${error.message}`,
        error.stack
      );
      throw error;
    }
  }
}
