import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const HomePage = (props) => {
  return (
    <div className="homePage">
      <h1>Stay curious.</h1>
      <p>
        Discover stories, thinking, and expertise from writers on any topic.
      </p>
      <Link to="/blogs">Starting reading</Link>
    </div>
  );
};

export default {
  component: HomePage,
};
