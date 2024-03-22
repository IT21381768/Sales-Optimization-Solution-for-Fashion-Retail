import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          TRENDZ
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/product/add">Admin</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
         
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
