import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import BlogList from '../../components/blogs/BlogList';
import { getALlBlogs } from '../../redux/blogs/actions';

function BlogListPage({ getALlBlogs, blogs }) {
  useEffect(() => {
    getALlBlogs();
  }, []);
  return <BlogList blogs={blogs} />;
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
  };
};

const mapDispatchToProps = {
  getALlBlogs,
};

function loadData({ dispatch }) {
  return dispatch(getALlBlogs());
}
export default {
  component: connect(mapStateToProps, mapDispatchToProps)(BlogListPage),
  loadData,
};
