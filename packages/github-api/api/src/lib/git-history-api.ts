export async function gitHistoryApi(
  token: string,
  owner: string,
  repository: string
) {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repository}/commits`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Error searching commits: ' + response.statusText);
    }

    const commits = await response.json();
    const commitInfos = await Promise.all(
      commits.map(async (commit: any) => {
        const commitSha = commit.sha;
        return await getCommitInfo(token, owner, repository, commitSha);
      })
    );

    return commitInfos;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getCommitInfo(
  token: string,
  owner: string,
  repository: string,
  commitSha: string
) {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repository}/commits/${commitSha}`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Error searching commit: ' + response.statusText);
    }

    const commit = await response.json();
    const author = commit.commit.author.name;
    const message = commit.commit.message;
    const files = commit.files.map((file: any) => ({
      filename: file.filename,
      raw_url: file.raw_url,
    }));

    return {
      author,
      message,
      files,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
