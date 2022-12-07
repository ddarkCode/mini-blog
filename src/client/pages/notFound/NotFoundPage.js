import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage({ staticContext = {} }) {
  staticContext.notFound = true;
  console.log(`Not found page: ${JSON.stringify(staticContext)}`);
  return (
    <div className="notFound">
      <h2>404</h2>
      <p>Sorry, page not found.</p>
      <p>You'll find loads to explore on the home page.</p>
      <Link to={'/'}>Bloggy Home</Link>
    </div>
  );
}

export default {
  component: NotFoundPage,
};
