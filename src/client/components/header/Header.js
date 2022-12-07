import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <div className="logo-container">
        <Link to="/">Blogger</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/blogs">Bloggies</Link>
        </li>
        <li>
          <Link to="/blogs/write/new-blog">Write</Link>
        </li>
        <li>
          <Link to="/options">Options</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
