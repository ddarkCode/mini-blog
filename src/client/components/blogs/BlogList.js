import React from 'react';

import Blog from './Blog';

function BlogList({ blogs, users }) {
  const blogsToRender = blogs;
  return (
    <div className="bloglist-container">
      {blogsToRender.map((blog) => {
        console.log(blog._id);
        return <Blog key={blog._id} {...blog} id={blog._id} users={users} />;
      })}
    </div>
  );
}

export default BlogList;
