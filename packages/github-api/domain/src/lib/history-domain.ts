import { getHistoryCommitInfo } from "./api";

export class HistoryDomain {

  constructor(private token: string) {}

  getHistoryCommitInfo(owner: string, repository: string) {
    this.token = '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';
    getHistoryCommitInfo(this.token, owner, repository);
  }
}
