import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <Link to="/">Blogger</Link>
        </div>
        <ul>
          <li>
            <Link to="/blogs">Bloggies</Link>
          </li>
          <li>
            <Link to="/blogs/write/new-blog">Write Bloggy</Link>
          </li>
          <li>
            <Link to="/options">Options</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
