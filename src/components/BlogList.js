import BlogItem from "./BlogItem";

function BlogList({ blogPosts }) {
  return (
    <div
      style={{
        width: "800px",
        margin: "0 auto",
      }}
    >
      <h1>BlogList</h1>
      {blogPosts.map((blogPost) => (
        <BlogItem key={blogPost.id} blogPost={blogPost} />
      ))}
    </div>
  );
}

export default BlogList;
