import axios from "axios";

const fetchLatestBlogPosts = async () => {
  const res = await axios.get(`https://dev.to/api/articles/me/all`, {
    headers: {
      "api-key": `3AMmKjGQGokMp9fwbqa4URE4`,
    },
  });

  let posts = res?.data;

  let latestSixPosts = posts?.splice?.(0, 12);

  return latestSixPosts;
};

export default fetchLatestBlogPosts;
