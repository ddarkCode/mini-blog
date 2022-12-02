import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import BlogList from '../../components/blogs/BlogList';
import { getUserBlogs } from '../../redux/userblogs/actions';

function UserBlogListPage({}) {
  const { userBlogs, auth } = useSelector((state) => state);
  console.log('User Blog List Page: ', userBlogs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserBlogs(auth.profile._id));
  }, []);
  return <BlogList blogs={userBlogs} users={auth.profile} />;
}

function loadData(store, blogId, userId) {
  return (function () {
    store.dispatch(getUserBlogs(userId));
  })();
}
export default {
  component: UserBlogListPage,
  loadData,
};
