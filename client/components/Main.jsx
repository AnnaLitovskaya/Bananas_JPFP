import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import AllCampuses from './campusComponents/AllCampuses.jsx';
import SingleCampus from './campusComponents/SingleCampus.jsx';
import CampusForm from './campusComponents/CampusForm.jsx';
import AllStudents from './studentComponents/AllStudents.jsx';
import SingleStudent from './studentComponents/SingleStudent.jsx';
import StudentForm from './studentComponents/StudentForm.jsx';
import Oops from './Oops.jsx';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={home} exact />
          <Route path="/campuses" component={AllCampuses} exact />
          <Route path="/campuses/addCampus" component={CampusForm} exact />
          <Route path="/campuses/:campusId" component={SingleCampus} exact />
          <Route path="/campuses/:campusId/edit" component={CampusForm} />
          <Route path="/students" component={AllStudents} exact />
          <Route path="/students/addStudent" component={StudentForm} exact />
          <Route path="/students/:studentId" component={SingleStudent} exact />
          <Route path="/students/:studentId/edit" component={StudentForm} />
          <Route path="*" component={Oops} />
        </Switch>
      </Router>
    );
  }
}

const home = () => {
  return (
    <div className="campusImg center">
      <h1>Campus Explorer JPFP</h1>
      <img
        src="https://img.money.com/2017/06/harvardrichestgrads-em-171224935.jpg?quality=60&w=1600"
        height="500px"
      />
    </div>
  );
};

export default Main;
