import React, { Component } from 'react';
import { connect } from 'react-redux';
import { singleStudent } from '../../store/storeComponents/singleStudent';
import { deleteStudent } from '../../store/storeComponents/deleteStudent';
import { HashRouter as Router } from 'react-router-dom';
import CampusTab from '../campusComponents/CampusTab.jsx';
import SelectCampus from '../campusComponents/SelectCampus.jsx';

class SingleStudent extends Component {
  componentDidMount() {
    const studentId = this.props.match.params.studentId * 1;
    this.props.singleStudent(studentId);
  }
  render() {
    const student = this.props.student;
    return (
      <Router>
        <div id="singleStudent">
          <img src={student.imageURL} width="400" height="400" />
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
              <button
                onClick={() => {
                  this.props.deleteStudent(student.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div>
          {/* Campus Assignment */}
          {student.Campus ? (
            <div>
              <div>
                <h3 className="center">
                  This student is registered to a campus
                </h3>
                <div id="singleStudentCampus">
                  <CampusTab tab={student.Campus} />
                  <SelectCampus />
                  <button>Change Campus</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="center">
              <h3>The student is not registered to a campus.</h3>
              <SelectCampus />
              <button>Add To Campus</button>
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

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    singleStudent: (studentId) => {
      dispatch(singleStudent(studentId));
    },
    deleteStudent: (studentId) => {
      dispatch(deleteStudent(studentId, history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
