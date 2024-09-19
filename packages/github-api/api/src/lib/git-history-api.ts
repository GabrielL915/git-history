export function gitHistoryApi(
  token: string,
  owner: string,
  repository: string
) {
  fetch(`https://api.github.com/repos/${owner}/${repository}/commits`, {
    headers: {
      Authorization: `token ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error search commits: ' + response.statusText);
      }
      return response.json();
    })
    .then((commits) => {
      commits.forEach((commit: any) => {
        const commitSha = commit.sha;
        getCommitInfo(token, owner, repository, commitSha);
      });
    });
}
function getCommitInfo(
  token: string,
  owner: string,
  repository: string,
  commitSha: string
) {
  fetch(
    `https://api.github.com/repos/${owner}/${repository}/commits/${commitSha}`,
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error search commit: ' + response.statusText);
      }
      return response.json();
    })
    .then((commit) => {
      console.log(commit.commit.author.name);
      const files = commit.files;
      files.forEach((file: any) => {
        console.log(file.filename);
        console.log(commit.commit.message);
        console.log(file.raw_url);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
