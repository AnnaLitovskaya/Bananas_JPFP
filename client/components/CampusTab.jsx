import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

const CampusTab = (props) => {
  return (
    <Router>
      <div>
        {props.tab.name}
        {<img src={props.tab.imageURL.slice(0, 25) + randomImage() + '/200'} />}
        Students: {props.tab.Students.length}
        <Link to={`/campuses/${props.tab.id}`}>Edit</Link>
        <button>Delete</button>
      </div>
    </Router>
  );
};

export default CampusTab;
