import axios from "axios";
import userData from "@constants/data";

const fetchGitHubRepos = async () => {
  const username = userData?.githubUsername;
  let token = process.env.GITHUB_AUTH_TOKEN;

  const res = await axios?.get(
    `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  );
  let repos = res?.data?.items;
  let latestSixRepos = repos?.splice?.(0, 9);

  return latestSixRepos;
};

export default fetchGitHubRepos;
