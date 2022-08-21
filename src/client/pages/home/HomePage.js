import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
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

const loadData = () => console.log('Hello Home Page');

export default {
  component: HomePage,
  loadData,
};
