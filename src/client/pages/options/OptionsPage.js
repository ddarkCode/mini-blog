import React from 'react';
import { logout } from '../../redux/auth/actions';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import requireAuth from '../../components/hocs/requireAuth';

function OptionsPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatch(logout());
    history.push('/');
  };
  return <button onClick={handleLogout}>Logout</button>;
}

export default {
  component: requireAuth(OptionsPage),
};
