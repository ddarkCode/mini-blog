import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
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
            <Link to="/write">Write</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
