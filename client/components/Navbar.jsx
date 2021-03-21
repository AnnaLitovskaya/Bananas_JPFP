import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/campuses">Campuses</Link>
        <Link to="/students">Students</Link>
      </nav>
    </Router>
  );
};

export default Navbar;
