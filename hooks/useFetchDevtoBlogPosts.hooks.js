import { getDevtoPostsKey } from "@constants/queryKeys";
import { useQuery } from "react-query";
import fetchLatestBlogPosts from "services/fetchLatestBlogPosts.service";

const useFetchDevtoBlogPosts = (initialData) => {
  const { data, isLoading, isError } = useQuery({
    queryFn: fetchLatestBlogPosts,
    queryKey: [getDevtoPostsKey],
    initialData: initialData,
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export default useFetchDevtoBlogPosts;
