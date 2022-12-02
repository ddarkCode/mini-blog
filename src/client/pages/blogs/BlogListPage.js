import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import BlogList from '../../components/blogs/BlogList';
import { getAllBlogs } from '../../redux/blogs/actions';
import { getUsers } from '../../redux/users/actions';

function BlogListPage({ getAllBlogs, blogs, getUsers, users }) {
  useEffect(() => {
    getAllBlogs();
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
  getAllBlogs,
  getUsers,
};

function loadData({ dispatch }) {
  return (function () {
    dispatch(getAllBlogs());
    dispatch(getUsers());
  })();
}
export default {
  component: connect(mapStateToProps, mapDispatchToProps)(BlogListPage),
  loadData,
};
