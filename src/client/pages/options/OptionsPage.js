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
  return (
    <div className="optionsPage">
      <button onClick={handleLogout}>Logout</button>
      <button>Update or Delete Blog</button>
    </div>
  );
}

export default {
  component: requireAuth(OptionsPage),
};
