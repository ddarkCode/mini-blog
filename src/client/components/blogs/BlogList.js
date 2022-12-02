import React from 'react';

import Blog from './Blog';

function BlogList({ blogs, users }) {
  const blogsToRender = blogs;
  console.log('Blogs: ', blogs);
  return (
    <div className="bloglist-container">
      {blogsToRender.map((blog) => {
        return <Blog key={blog._id} blog={blog} users={users} />;
      })}
    </div>
  );
}

export default BlogList;
