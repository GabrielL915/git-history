import { gitHistoryApi } from 'git-history-api';

export class GitHistoryService {
  public getHistoryCommitInfo(owner: string, repository: string) {
    const token: any = process.env['token'];
    return gitHistoryApi(token, owner, repository);
  }
}
