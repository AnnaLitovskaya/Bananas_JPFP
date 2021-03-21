import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

const randomImage = () => {
  const buildingImageArr = [1029, 1031, 1033, 1040, 1047, 1048, 1054, 1058, 1065,
    1067, 1075, 1076, 1078, 1081, 122, 134, 142, 164, 178, 188, 192, 193, 195,
    214, 221, 234, 236, 238, 240, 274, 283, 288, 289, 290, 299, 308, 315];
  const randomNum = Math.floor(Math.random() * buildingImageArr.length);
  return buildingImageArr[randomNum];
};

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
