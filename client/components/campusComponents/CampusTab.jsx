import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

const CampusTab = (props) => {
  return (
    <Router>
      <div className="campusTab">
        {<img src={props.tab.imageURL} />}
        <div>
          <p>{props.tab.name}</p>
          <p>{props.tab.Students.length} students</p>
          <div>
            <Link to={`/campuses/${props.tab.id}`}>Edit</Link>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default CampusTab;
