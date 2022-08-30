import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const { user } = useSelector((state) => state.auth);
  const loginOrLogout = user ? (
    <a href="/api/auth/register">Logout</a>
  ) : (
    <Link to="/login">Login</Link>
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
          <li>{user ? null : <Link to="/register">Register</Link>}</li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
