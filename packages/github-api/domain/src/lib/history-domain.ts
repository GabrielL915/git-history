import { gitHistoryApi } from "git-history-api";

export class HistoryDomain {
  getHistoryCommitInfo(owner: string, repository: string) {
    const token: any = process.env["token"];
    gitHistoryApi(token, owner, repository);
  }
}
