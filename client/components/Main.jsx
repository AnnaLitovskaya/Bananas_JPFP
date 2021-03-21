import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import AllCampuses from './AllCampuses.jsx';
import AllStudents from './AllStudents.jsx';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact />
          <Route path="/campuses" component={AllCampuses} />
          {/* <Route component={AllStudents} path="/students" /> */}
        </Switch>
      </Router>
    );
  }
}

export default Main;
