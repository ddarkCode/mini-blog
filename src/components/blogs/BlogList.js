import React from 'react';
import Blog from './Blog';

const BlogList = ({ blogs }) => {
  return (
    <>
      {Object.values(blogs).map((blog) => {
        return <Blog key={blog._id} blog={blog} />;
      })}
    </>
  );
};

export default BlogList;
