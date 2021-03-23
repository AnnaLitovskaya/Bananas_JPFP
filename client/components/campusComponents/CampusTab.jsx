import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

const CampusTab = (props) => {
  return (
    <Router>
      <div className="campusTab">
        <Link to={`/campuses/${props.tab.id}`}>
          {<img src={props.tab.imageURL} />}
        </Link>
        <div>
          <p>
            <Link to={`/campuses/${props.tab.id}`}>{props.tab.name}</Link>
          </p>
          {props.tab.Students ? (
            <div>
              <p>{props.tab.Students.length} students</p>
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </Router>
  );
};

export default CampusTab;
