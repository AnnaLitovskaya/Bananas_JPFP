import React from 'react';
import { withRouter, HashRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteStudent } from '../../store/storeComponents/studentStoreComponents/deleteStudent';
import { changeStudentCampus } from '../../store/storeComponents/studentStoreComponents/changeStudentCampus';

const StudentTab = (props) => {
  const student = props.tab;
  const unregisterCampus = { id: '' };
  if (!student) {
    return '';
  } else {
    return (
      <Router>
        <div className="studentTab">
          <Link to={`/students/${student.id}`}>
            <img
              src={student ? student.imageURL : ''}
              width="200"
              height="200"
            />
          </Link>
          <Link to={`/students/${student.id}`}>
            <p>
              {student.firstName} {student.lastName}
            </p>
          </Link>
          {student.Campus ? (
            <Link to={`/campuses/${student.Campus.id}`}>
              {student.Campus.name}
            </Link>
          ) : (
            ''
          )}
          {props.campus ? (
            <button
              onClick={() => {
                props.changeStudentCampus(student, unregisterCampus);
              }}
            >
              Unregister
            </button>
          ) : (
            <div>
              <Link to={`/students/${student.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button
                onClick={() => {
                  props.deleteStudent(student.id);
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </Router>
    );
  }
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    deleteStudent: (studentId) => {
      dispatch(deleteStudent(studentId, history));
    },
    changeStudentCampus: (student, campus) => {
      dispatch(changeStudentCampus(student, campus, history));
    },
  };
};

export default withRouter(connect(null, mapDispatchToProps)(StudentTab));
