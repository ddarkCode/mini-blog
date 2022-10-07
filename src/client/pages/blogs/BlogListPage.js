import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import BlogList from '../../components/blogs/BlogList';
import { getALlBlogs } from '../../redux/blogs/actions';
import { getUsers } from '../../redux/users/actions';

function BlogListPage({ getALlBlogs, blogs, getUsers, users }) {
  useEffect(() => {
    getALlBlogs();
    getUsers();
  }, []);
  return <BlogList blogs={blogs} users={users} />;
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    users: state.users,
  };
};

const mapDispatchToProps = {
  getALlBlogs,
  getUsers,
};

function loadData({ dispatch }) {
  return (function () {
    dispatch(getALlBlogs());
    dispatch(getUsers());
  })();
}
export default {
  component: connect(mapStateToProps, mapDispatchToProps)(BlogListPage),
  loadData,
};
