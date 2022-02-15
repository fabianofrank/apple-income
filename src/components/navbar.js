import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div key="1">
      <Link to="/">
        <h1>Financial Statements</h1>
      </Link>
    </div>
  </nav>
);

export default Navbar;
