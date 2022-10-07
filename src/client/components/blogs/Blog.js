import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Blog({ title, authorId, content, createdAt, id, users }) {
  const user = users.find((user) => user._id === authorId);

  function dateFormat(date) {
    const newDate = new Date(date);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return newDate.toLocaleDateString('en-US', options);
  }

  return (
    <div className="blog-container">
      <h3>{title}</h3>
      <p className="date">{dateFormat(createdAt)}</p>
      <p className="author">{user ? user.fullname : ''}</p>
      <p className="post">{content.substring(0, 130)}...</p>
      <Link to={`/blogs/${id}`}>Read more</Link>
    </div>
  );
}

export default Blog;
