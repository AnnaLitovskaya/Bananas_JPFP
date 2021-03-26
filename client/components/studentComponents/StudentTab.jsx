import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteStudent } from '../../store/storeComponents/deleteStudent';

const StudentTab = (props) => {
  const student = props.tab;
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
          <div>
            <button>Edit</button>
            <button
              onClick={() => {
                props.deleteStudent(student.id);
              }}
            >
              Delete
            </button>
          </div>
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
  };
};

export default connect(null, mapDispatchToProps)(StudentTab);
