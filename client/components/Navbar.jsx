import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Router>
      <nav>
        <div className="bananaIcon">
          <Link to="/">
            <img src="https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg" />
            <span>Home</span>
          </Link>
        </div>
        <div>
          <Link to="/campuses">Campuses</Link>
        </div>
        <div>
          <Link to="/students">Students</Link>
        </div>
      </nav>
    </Router>
  );
};

export default Navbar;
