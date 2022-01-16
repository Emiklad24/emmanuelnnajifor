import axios from "axios";
import userData from "@constants/data";

const fetchGitHubRepos = async () => {
  const username = userData?.githubUsername;

  const res = await axios?.get(
    `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
  );
  let repos = res?.data?.items;
  let latestSixRepos = repos?.splice?.(0, 12);

  return latestSixRepos;
};

export default fetchGitHubRepos;
