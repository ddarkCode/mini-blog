import React from 'react';
import { logout } from '../../redux/auth/actions';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import requireAuth from '../../components/hocs/requireAuth';
import { Link } from 'react-router-dom';

function OptionsPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatch(logout());
    history.push('/blogs');
  };
  return (
    <div className="optionsPage">
      <button onClick={handleLogout}>Logout</button>
      <Link className="optionsButton" to="/user/blogs">
        View Your Blogs
      </Link>
      <Link className="optionsButton" to="/user/profile">
        Update Profile
      </Link>
    </div>
  );
}

export default {
  component: requireAuth(OptionsPage),
};
