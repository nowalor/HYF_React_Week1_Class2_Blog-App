import { useState, useEffect } from "react";

function AddBlogPost({ handleAddBlogPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    console.log("title", title);
  }, [title]);

  function saveBlogPost(e) {
    e.preventDefault();

    handleAddBlogPost(title, content);
  }

  return (
    <form onSubmit={(e) => saveBlogPost(e)}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <button>Save blog post</button>
    </form>
  );
}

export default AddBlogPost;
