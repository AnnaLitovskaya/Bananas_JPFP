import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

const StudentTab = (props) => {
  return (
    <Router>
      <div>
        {props.tab.firstName} {props.tab.lastName}
        {<img src={props.tab.imageURL} />}
        {props.tab.Campus.name}
      </div>
    </Router>
  );
};

export default StudentTab;
