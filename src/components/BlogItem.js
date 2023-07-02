function BlogItem( { blogPost } ) {
  return (
    <div>
      <h3>{blogPost.title}</h3>
      <p>{blogPost.body}</p>
    </div>
  );
}

export default BlogItem;
