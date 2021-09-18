import { getGitHubRepoKey } from "@constants/queryKeys";
import { useQuery } from "react-query";
import fetchGitHubRepos from "services/fetchGitHubRepos.service";

const useFetchGitHubRepos = (initialData) => {
  const { data, isLoading, isError } = useQuery({
    queryFn: fetchGitHubRepos,
    queryKey: [getGitHubRepoKey],
    initialData: initialData,
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export default useFetchGitHubRepos;
