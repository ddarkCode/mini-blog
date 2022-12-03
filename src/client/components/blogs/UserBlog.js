import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { deleteBlog } from '../../redux/userblogs/actions';

function UserBlog({ blog, auth }) {
  const { createdAt, content, _id, title, authorId } = blog;
  const dispatch = useDispatch();
  const { profile, token } = auth;
  const history = useHistory();

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

  function deleteBlogHandler(blogId, token) {
    dispatch(deleteBlog(blogId, token));
    history.push('/user/blogs');
  }

  return (
    <div className="blog-container">
      <h3>{title}</h3>
      <p className="date">{dateFormat(createdAt)}</p>
      <p className="author">{profile ? profile.fullname : ''}</p>
      <p className="post">{content ? content.substring(0, 130) : ''}...</p>
      <div className="userBlogButtons">
        <Link to={`/blogs/${_id}`}>Read more</Link>
        <Link to={`/blogs/write/update/${_id}`}>Update</Link>
        <button onClick={() => deleteBlogHandler(_id, token)}>Delete</button>
      </div>
    </div>
  );
}

export default UserBlog;
