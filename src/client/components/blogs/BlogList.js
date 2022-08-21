import React from 'react';

import Blog from './Blog';

function BlogList({ blogs }) {
  const blogsToRender = blogs
    ? blogs.map((blog) => ({ ...blog, date: new Date(blog.date) }))
    : [];

  return (
    <div className="bloglist-container">
      {blogsToRender.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default BlogList;
