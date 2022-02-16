import React from 'react';
import { Link } from 'react-router-dom';
import leftarrow from '../left-arrow.png';
import apple from '../apple-logo.png';

const Navbar = () => (
  <nav>
    <div key="1">
      <Link to="/" className="link">
        <img alt="left arrow" src={leftarrow} className="left" />
        <div className="header">
          <img alt="apple logo" src={apple} className="apple" />
          <h1>Financial Statements</h1>
        </div>
      </Link>
    </div>
  </nav>
);

export default Navbar;
