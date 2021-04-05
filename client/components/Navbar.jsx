import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Router>
      <nav>
        <div className="bananaIcon">
          <Link to="/">
            <img src="https://img.icons8.com/dusk/452/university-campus.png" />
            <div>Home</div>
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
