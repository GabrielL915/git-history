import { HttpException, HttpStatus } from '@nestjs/common';

export interface CommitInfo {
  author: string;
  message: string;
  files: Array<{ filename: string; raw_url: string }>;
}

export async function gitHistoryApi(
  token: string,
  owner: string,
  repository: string
): Promise<CommitInfo[]> {
  const baseUrl = 'https://api.github.com';
  const headers = {
    Authorization: `token ${token}`,
    Accept: 'application/vnd.github.v3+json',
  };

  try {
    const response = await fetch(
      `${baseUrl}/repos/${owner}/${repository}/commits`,
      { headers }
    );
    await handleResponse(response);
    const commits = await response.json();

    const commitInfos = await Promise.all(
      commits.map((commit: any) =>
        getCommitInfo(token, owner, repository, commit.sha)
      )
    );

    return commitInfos;
  } catch (error) {
    handleApiError(error);
  }
}

async function getCommitInfo(
  token: string,
  owner: string,
  repository: string,
  commitSha: string
): Promise<CommitInfo> {
  const baseUrl = 'https://api.github.com';
  const headers = {
    Authorization: `token ${token}`,
    Accept: 'application/vnd.github.v3+json',
  };

  try {
    const response = await fetch(
      `${baseUrl}/repos/${owner}/${repository}/commits/${commitSha}`,
      { headers }
    );
    await handleResponse(response);
    const commit = await response.json();

    return {
      author: commit.commit.author.name,
      message: commit.commit.message,
      files: commit.files.map((file: any) => ({
        filename: file.filename,
        raw_url: file.raw_url,
      })),
    };
  } catch (error) {
    handleApiError(error);
  }
}

async function handleResponse(response: Response): Promise<void> {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new HttpException(
      errorData.message ||
        'An error occurred while fetching data from GitHub API',
      response.status || HttpStatus.INTERNAL_SERVER_ERROR
    );
  }
}

function handleApiError(error: any): never {
  if (error instanceof HttpException) {
    throw error;
  } else if (error instanceof TypeError) {
    throw new HttpException(
      'Network error or CORS issue',
      HttpStatus.SERVICE_UNAVAILABLE
    );
  } else {
    throw new HttpException(
      'An unexpected error occurred',
      HttpStatus.INTERNAL_SERVER_ERROR
    );
  }
}
