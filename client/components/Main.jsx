import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import AllCampuses from './campusComponents/AllCampuses.jsx';
import SingleCampus from './campusComponents/SingleCampus.jsx';
import CampusForm from './campusComponents/CampusForm.jsx';
import AllStudents from './studentComponents/AllStudents.jsx';
import SingleStudent from './studentComponents/SingleStudent.jsx';
import StudentForm from './studentComponents/StudentForm.jsx';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={pbjtime} exact />
          <Route path="/campuses" component={AllCampuses} exact />
          <Route path="/campuses/addCampus" component={CampusForm} exact />
          <Route path="/campuses/:campusId" component={SingleCampus} exact />
          <Route path="/campuses/:campusId/edit" component={CampusForm} />
          <Route path="/students" component={AllStudents} exact />
          <Route path="/students/addStudent" component={StudentForm} exact />
          <Route path="/students/:studentId" component={SingleStudent} exact />
          <Route path="/students/:studentId/edit" component={StudentForm} />
        </Switch>
      </Router>
    );
  }
}

const pbjtime = () => {
  return (
    <div className="center">
      <br />
      <br />
      <br />
      <img src="https://lh4.googleusercontent.com/proxy/14o3YmaCDx4qqqnQqe2Als4DASI2ZSjUjZkgBI8Mb8QK9J2LtSMBKXfT97SwSv9MxZic_YioI4zuQ-KKupCOr5QHH7YVnQB1MkxGAnL160FIYNK_qqnY2iD5WMA=s0-d" />
    </div>
  );
};

export default Main;
