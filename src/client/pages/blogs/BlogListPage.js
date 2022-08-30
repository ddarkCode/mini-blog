import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BlogList from '../../components/blogs/BlogList';

import { getBlogs } from '../../redux/blogs';

function BlogListPage() {
  const { blogs } = useSelector((state) => state.blogs);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  return <BlogList blogs={blogs} />;
}

function loadData({ dispatch }) {
  return dispatch(getBlogs());
}
export default {
  component: BlogListPage,
  loadData,
};
