import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCampuses } from '../../store/thunks';
import CampusTab from './CampusTab.jsx';

class AllCampuses extends Component {
  componentDidMount() {
    this.props.getCampuses();
  }
  render() {
    const campuses = this.props.campuses;
    if (campuses.length === 0) {
      return (
        <div className="emptyPage">
          <h1>All Campuses</h1>
          <h3>There are no campuses registered in the database.</h3>
          <button>Add Campus</button>
        </div>
      );
    } else {
      return (
        <div>
          <div className="listHeader">
            <h1>All Campuses</h1>
            <button>Add Campus</button>
          </div>
          <div id="campusListing">
            {campuses.map((campus) => {
              return (
                <div key={campus.id}>
                  <CampusTab tab={campus} />
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCampuses: () => {
      dispatch(getCampuses());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);
