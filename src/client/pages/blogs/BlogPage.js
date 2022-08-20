import React from 'react';
import { renderRoutes } from 'react-router-config';

const BlogPage = ({ route }) => {
  return <div>{renderRoutes(route.routes)}</div>;
};

export default { component: BlogPage };
