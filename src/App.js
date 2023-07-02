import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import BlogList from "./components/BlogList";
import AddBlogPost from "./components/AddBlogPost";

// Exercise delete blog post

function App() {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "Mastering React Hooks: A Beginner's Guide",
      body: "React Hooks have revolutionized the way developers write components in React. They provide a simpler and more elegant way to handle state and side effects. In this blog post, we will explore the fundamentals of React Hooks and how to use them effectively in your projects.",
    },
    {
      id: 2,
      title: "Building Responsive UIs with React",
      body: "Creating responsive user interfaces is essential in modern web development. In this blog post, we will delve into techniques and best practices for building responsive UIs using React. We'll cover media queries, viewport units, and responsive design patterns to ensure your React applications look great on any device.",
    },
    {
      id: 3,
      title: "Optimizing Performance in React Applications",
      body: "Performance is a critical aspect of any web application, and React provides several optimization techniques to ensure fast and smooth user experiences. In this blog post, we will discuss strategies such as code splitting, memoization, and lazy loading components to optimize the performance of your React applications.",
    },
  ]);

  function handleAddBlogPost(title, content) {
      const newBlogPost = {
        id: blogPosts.length + 1,
        title,
        body: content,
      }

      setBlogPosts([...blogPosts, newBlogPost])
  }

  function deleteBlogPost(blogPostId) {
    const filteredBlogPosts = blogPosts.filter(blogPost => blogPost.id !== blogPostId)

    setBlogPosts(filteredBlogPosts)
  }

  return <div className="App">
    <Header blogPostCount={blogPosts.length}/>
    <BlogList blogPosts={blogPosts} deleteBlogPost={deleteBlogPost}/>
    <AddBlogPost handleAddBlogPost={handleAddBlogPost}/>
  </div>;
}

export default App;
