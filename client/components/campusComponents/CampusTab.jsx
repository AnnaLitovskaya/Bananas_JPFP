import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteCampus } from '../../store/storeComponents/campusStoreComponents/deleteCampus';

const CampusTab = (props) => {
  const tab = props.tab;
  return (
    <Router>
      <div className="campusTab">
        <Link to={`/campuses/${tab.id}`}>
          {<img src={tab.imageURL} width="200" height="200" />}
        </Link>
        <div>
          <p>
            <Link to={`/campuses/${tab.id}`}>{tab.name}</Link>
          </p>
          {tab.Students ? (
            <div>
              <p>{tab.Students.length} students</p>
              <div>
                <button>Edit</button>
                <button
                  onClick={() => {
                    props.deleteCampus(tab.id);
                  }}
                >
                  Delete
                </button>
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

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    deleteCampus: (campusId) => {
      dispatch(deleteCampus(campusId, history));
    },
  };
};

export default connect(null, mapDispatchToProps)(CampusTab);
