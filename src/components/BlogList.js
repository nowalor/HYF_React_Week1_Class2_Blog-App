import BlogItem from "./BlogItem";

function BlogList({ blogPosts, deleteBlogPost }) {
  return (
    <div
      style={{
        width: "800px",
        margin: "0 auto",
      }}
    >
      <h1>BlogList</h1>
      {blogPosts.map((blogPost) => (
        <BlogItem
          key={blogPost.id}
          blogPost={blogPost}
          deleteBlogPost={deleteBlogPost}
        />
      ))}
    </div>
  );
}

export default BlogList;
