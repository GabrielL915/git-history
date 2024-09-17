export function getHistoryCommitInfo(
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
        console.log(commit.sha);
        console.log(commit.commit.author.name);
        console.log(commit.commit.author.date);
        console.log(commit.commit.message);
      });
    });
}
