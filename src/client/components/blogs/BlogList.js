import React from 'react';

import Blog from './Blog';

function BlogList({ blogs }) {
  const blogsToRender = blogs;
  return (
    <div className="bloglist-container">
      {blogsToRender.map((blog) => (
        <Blog key={blog._id} {...blog} />
      ))}
    </div>
  );
}

export default BlogList;
