import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import AllCampuses from './campusComponents/AllCampuses.jsx';
import SingleCampus from './campusComponents/SingleCampus.jsx';
import AllStudents from './studentComponents/AllStudents.jsx';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact />
          <Route path="/campuses" component={AllCampuses} exact />
          <Route path="/campuses/:campusId" component={SingleCampus} />
          <Route path="/students" component={AllStudents} />
        </Switch>
      </Router>
    );
  }
}

export default Main;
