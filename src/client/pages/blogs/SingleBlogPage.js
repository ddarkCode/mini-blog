import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getBlog } from '../../redux/singleBlog';

function SingleBlogPage() {
  const { blog } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  const { blogId } = useParams();
  global.globalBlogId = blogId;

  useEffect(() => {
    dispatch(getBlog(blogId));
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

  return (
    <div className="single-blog-page">
      <h2>{blog.title}</h2>
      <p className="date">{dateFormat(blog.date)}</p>
      <p className="author">{blog.author}</p>
      <p className="post">{blog.post}</p>
      <Link to={`/blogs`}>Back to all blogs</Link>
    </div>
  );
}

function loadData({ dispatch }) {
  return dispatch(getBlog(globalBlogId));
}

export default {
  component: SingleBlogPage,
  loadData,
};
