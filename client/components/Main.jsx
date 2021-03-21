import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import AllCampuses from './AllCampuses.jsx';
import AllStudents from './AllStudents.jsx';

class Main extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route path="/" />
        <Route component={AllCampuses} path="/campuses" />
        <Route component={AllStudents} path="/students" />
      </Router>
    );
  }
}

export default Main;
