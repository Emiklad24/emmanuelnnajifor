const BlogPostCard = ({ latestPost }) => {
  return (
    <div className="github-repo  shadow-md p-4 rounded-xl">
      <img
        src={latestPost?.cover_image}
        alt={latestPost?.title}
        className="mb-4 rounded-md object-cover shadow-2xl h-48"
        loading="lazy"
      />

      <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
        {latestPost?.title}
      </h1>

      <p className="text-base font-normal my-4 text-gray-500">
        {latestPost?.description}
      </p>
      <a
        href={latestPost?.url}
        target="_blank"
        className="font-semibold group flex flex-row space-x-2 w-full items-center"
      >
        <p>View Post </p>
        <div className="transform  group-hover:translate-x-2 transition duration-300">
          &rarr;
        </div>
      </a>
    </div>
  );
};
export default BlogPostCard;
