import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

const CampusTab = (props) => {
  return (
    <Router>
      <div className="campusTab">
        {<img src={props.tab.imageURL} />}
        <div>
          <p>
            <Link to={`/campuses/${props.tab.id}`}>{props.tab.name}</Link>
          </p>
          <p>{props.tab.Students.length} students</p>
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default CampusTab;
