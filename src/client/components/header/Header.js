import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Header({ auth }) {
  const loginOrLogout = auth ? (
    <a href="/api/auth/register">Logout</a>
  ) : (
    <a href="/api/auth/logout">Login</a>
  );
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
          <li>{loginOrLogout}</li>
          <li>{auth ? null : <Link to="/register">Register</Link>}</li>
        </ul>
      </div>
    </nav>
  );
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
