import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (Component) => {
  const RequireAuth = (props) => {
    const { auth } = useSelector((state) => state);
    switch (auth) {
      case null:
        return <Redirect to="/login" />;
      default:
        return <Component auth={auth} {...props} />;
    }
  };
  return RequireAuth;
};
