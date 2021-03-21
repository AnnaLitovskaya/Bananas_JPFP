import React from 'react';

const CampusTab = (props) => {
  return (
    <div>
      {props.tab.name}
      {<img src={props.tab.imageURL} />}
      Students: {props.tab.Students.length}
    </div>
  );
};

export default CampusTab;
