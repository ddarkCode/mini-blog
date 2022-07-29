import React, { useState } from 'react';
import deb from 'debug';
import { Routes, Route } from 'react-router-dom';

import BlogList from './components/blogs/BlogList';
import NewBlog from './components/blogs/NewBlog';

const debug = deb('app:App');

const App = (props) => {
  const [state, setState] = useState(props.store.getState());

  return (
    <Routes>
      <Route path="/" element={<BlogList blogs={state.blogs} />} />
      <Route path="/new-blog" element={<NewBlog />} />
    </Routes>
  );
};

export default App;
