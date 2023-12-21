import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/profile" className="navbar__link">
            Profile
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/connections" className="navbar__link">
            Connections
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/projects" className="navbar__link">
            Project Wall
          </Link>
        </li>
        {/* New Link for Login Page */}
        <li className="navbar__item">
          <Link to="/login" className="navbar__link">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;