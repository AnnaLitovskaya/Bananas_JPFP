import React, { Component } from 'react';
import { connect } from 'react-redux';
import { singleStudent } from '../../store/storeComponents/singleStudent';
import { HashRouter as Router } from 'react-router-dom';
import CampusTab from '../campusComponents/CampusTab.jsx';

class SingleStudent extends Component {
  componentDidMount() {
    const studentId = this.props.match.params.studentId * 1;
    this.props.singleStudent(studentId);
  }
  render() {
    const student = this.props.student;
    console.log(student.Campus);
    return (
      <Router>
        <div id="singleStudent">
          <img
            src={
              student.imageURL
                ? student.imageURL.slice(0, student.imageURL.length - 3) + '400'
                : ''
            }
          />
          <div>
            <div>
              <h1>
                {student.firstName} {student.lastName}
              </h1>
              <h3>GPA: {student.gpa}</h3>
              <h3>{student.email}</h3>
            </div>
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
        <div>
          {/* Campus Assignment */}
          {student.Campus ? (
            <div>
              <h3 className="emptyPage">
                This student is registered to a campus
              </h3>
              <div>
                <CampusTab tab={student.Campus} />
              </div>
            </div>
          ) : (
            <div>
              <h3 className="emptyPage">
                The student is not registered to a campus.
              </h3>
              {/* <label htmlFor="campus">Select Campus</label>
              <select name="campus" id="campusSelect">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select> */}
            </div>
          )}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    student: state.student,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    singleStudent: (studentId) => {
      dispatch(singleStudent(studentId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
