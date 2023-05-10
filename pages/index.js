import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import useFetchGitHubRepos from "@hooks/useFetchGitHubRepos.hooks";
import fetchGitHubRepos from "services/fetchGitHubRepos.service";
import LatestBlogPosts from "@components/LatestBlog";
import useFetchDevtoBlogPosts from "@hooks/useFetchDevtoBlogPosts.hooks";
import fetchLatestBlogPosts from "services/fetchLatestBlogPosts.service";

export default function Home({ repositories, posts }) {
  const { data } = useFetchGitHubRepos(repositories);
  const { data: latestposts } = useFetchDevtoBlogPosts(posts);
  return (
    <ContainerBlock
      title="Emmanuel Nnajiofor - Developer, Blogger, Tutor and Gamer"
      description="I'm a software developer that loves building products and web applications that impact real people"
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={data} />
      <LatestBlogPosts blogPosts={latestposts} />
    </ContainerBlock>
  );
}

export const getStaticProps = async () => {
  const posts = await fetchLatestBlogPosts();
  const repositories = await fetchGitHubRepos();

  return {
    props: {
      repositories: repositories || null,
      posts: posts || null,
    },
  };
};
