import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { getBlog } from '../../redux/blogs/actions';

function SingleBlogPage({ getBlog, blog }) {
  const { blogId } = useParams();
  useEffect(() => {
    getBlog(blogId);
  }, []);
  console.log(blog);

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
      <p className="date">{dateFormat(blog.createdAt)}</p>
      <p className="author">{blog.authorId}</p>
      <p className="post">{blog.content}</p>
      <Link to={`/blogs`}>Back to all blogs</Link>
    </div>
  );
}

const mapStateToProps = ({ blog }) => {
  return {
    blog,
  };
};

const mapDispatchToProps = {
  getBlog,
};

function loadData(store, blogId) {
  return store.dispatch(getBlog(blogId));
}

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(SingleBlogPage),
  loadData,
};
