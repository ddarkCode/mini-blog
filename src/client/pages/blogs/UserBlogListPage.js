import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import UserBlogList from '../../components/blogs/UserBlogList';
import { getUserBlogs } from '../../redux/userblogs/actions';

function UserBlogListPage({}) {
  const { auth } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserBlogs(auth.profile._id));
  }, []);
  return <UserBlogList />;
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
