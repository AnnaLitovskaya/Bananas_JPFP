import React, { Component } from 'react';
import { connect } from 'react-redux';
import { singleStudent } from '../../store/storeComponents/studentStoreComponents/singleStudent';
import { deleteStudent } from '../../store/storeComponents/studentStoreComponents/deleteStudent';
import { HashRouter as Router, Link } from 'react-router-dom';
import CampusTab from '../campusComponents/CampusTab.jsx';
import SelectCampus from '../campusComponents/SelectCampus.jsx';

class SingleStudent extends Component {
  componentDidMount() {
    if (!this.props.student.id) {
      const studentId = this.props.match.params.studentId * 1;
      this.props.singleStudent(studentId);
    }
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
              <Link to={`/students/${student.id}/edit`}>
                <button>Edit</button>
              </Link>
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
                  <CampusTab tab={student.Campus} studentId={student.id} />
                  <SelectCampus studentId={student.id} />
                </div>
              </div>
            </div>
          ) : (
            <div className="center">
              <h3>The student is not registered to a campus.</h3>
              <SelectCampus studentId={student.id} />
            </div>
          )}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ student }) => {
  return {
    student,
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
