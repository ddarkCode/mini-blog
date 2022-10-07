import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { getBlog } from '../../redux/blogs/actions';
import { getUsers } from '../../redux/users/actions';

function SingleBlogPage({ getBlog, blog, getUsers, users }) {
  const { blogId } = useParams();
  useEffect(() => {
    getBlog(blogId);
    getUsers();
  }, []);

  function dateFormat(date) {
    const dateToReturn = new Date(date);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return dateToReturn.toLocaleDateString('en-US', options);
  }
  const author = users.find((user) => user._id === blog.authorId);

  return (
    <div className="single-blog-page">
      <h2>{blog.title}</h2>
      <p className="date">{dateFormat(blog.createdAt)}</p>
      <p className="author">{author ? author.fullname : ''}</p>
      <p className="post">{blog.content}</p>
      <Link to={`/blogs`}>Back to all blogs</Link>
    </div>
  );
}

const mapStateToProps = ({ blog, users }) => {
  return {
    blog,
    users,
  };
};

const mapDispatchToProps = {
  getBlog,
  getUsers,
};

function loadData(store, blogId) {
  return (function () {
    const { dispatch } = store;
    dispatch(getBlog(blogId));
    dispatch(getUsers());
  })();
}

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(SingleBlogPage),
  loadData,
};
