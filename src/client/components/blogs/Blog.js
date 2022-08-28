import React from 'react';
import { Link } from 'react-router-dom';

function Blog({ blog }) {
  function dateFormat(date) {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  }

  return (
    <div className="blog-container">
      <h3>{blog.title}</h3>
      <p className="date">{dateFormat(blog.date)}</p>
      <p className="author">{blog.author}</p>
      <p className="post">{blog.post.substring(0, 130)}...</p>
      <Link to={`/blogs/${blog._id}`}>Read more</Link>
    </div>
  );
}

export default Blog;
