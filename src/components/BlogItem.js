function BlogItem( { blogPost, deleteBlogPost } ) {
  return (
    <div>
      <h3>{blogPost.title}</h3>
      <p>{blogPost.body}</p>
      <button onClick={() => deleteBlogPost(blogPost.id)}>Delete post</button>
    </div>
  );
}

export default BlogItem;
