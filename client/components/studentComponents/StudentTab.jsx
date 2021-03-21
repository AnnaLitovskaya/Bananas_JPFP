import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

const StudentTab = (props) => {
  return (
    <Router>
      <div className="studentTab">
        {<img src={props.tab.imageURL} />}
        <p>
          {props.tab.firstName} {props.tab.lastName}
        </p>
        <Link to={`/campuses/${props.tab.Campus.id}`}>
          {props.tab.Campus.name}
        </Link>
      </div>
    </Router>
  );
};

export default StudentTab;
