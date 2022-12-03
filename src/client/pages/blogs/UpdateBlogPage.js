import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { updateBlog } from '../../redux/userblogs/actions';
import requireAuth from '../../components/hocs/requireAuth';

function UpdateBlogPage({ history }) {
  const params = useParams();
  const { userBlogs, auth } = useSelector((state) => state);

  const { blogId } = params;
  const blogToUpdate = userBlogs.find((blog) => blog._id === blogId);

  const [blog, setBlog] = useState({
    title: blogToUpdate.title,
    content: blogToUpdate.content,
  });

  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setBlog((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateBlog(blog, blogToUpdate._id, auth.token));
    history.push('/user/blogs');
  }
  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        <input
          name="title"
          onChange={handleChange}
          value={blog.title}
          required
        />

        <textarea
          name="content"
          onChange={handleChange}
          value={blog.content}
          required
          rows={15}
        />

        <button>Update</button>
      </form>
    </div>
  );
}

export default {
  component: requireAuth(UpdateBlogPage),
};
