import React from 'react';
import { useSelector } from 'react-redux';

import UserBlog from './UserBlog';

function UserBlogList() {
  const { userBlogs, auth } = useSelector((state) => state);
  return (
    <div className="bloglist-container">
      {userBlogs.map((blog) => {
        return <UserBlog key={blog._id} blog={blog} auth={auth} />;
      })}
    </div>
  );
}

export default UserBlogList;
