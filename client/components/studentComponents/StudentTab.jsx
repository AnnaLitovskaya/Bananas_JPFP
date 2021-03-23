import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

const StudentTab = (props) => {
  const student = props.tab;
  if (!student) {
    return '';
  } else {
    return (
      <Router>
        <div className="studentTab">
          <Link to={`/students/${student.id}`}>
            <img src={student ? student.imageURL : ''} />{' '}
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
        </div>
      </Router>
    );
  }
};

export default StudentTab;
