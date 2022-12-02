import React from 'react';
import { Link } from 'react-router-dom';

function Blog({ blog, users }) {
  const { createdAt, content, _id, title, authorId } = blog;
  const user = Array.isArray(users)
    ? users.find((user) => user._id === authorId)
    : users;

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
      <p className="post">{content ? content.substring(0, 130) : ''}...</p>
      <Link to={`/blogs/${_id}`}>Read more</Link>
    </div>
  );
}

export default Blog;
