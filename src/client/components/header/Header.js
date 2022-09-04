import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth/actions';

function Header({ auth, logout }) {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <Link to="/">Bloggy</Link>
        </div>

        <ul>
          <li>
            <Link to="/blogs">All blogs</Link>
          </li>
          <li>
            <Link to="/blogs/write/new-blog">Write</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <button className="logout-button" onClick={logout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const mapStateToProps = ({ auth }) => ({ auth });
const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
