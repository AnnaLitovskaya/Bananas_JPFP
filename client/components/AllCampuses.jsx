import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCampuses } from '../store/thunks';
import CampusTab from './CampusTab.jsx';

class AllCampuses extends Component {
  componentDidMount() {
    this.props.getCampuses();
  }
  render() {
    const campuses = this.props.campuses;
    if (!campuses) {
      return <h1>...loading</h1>;
    } else {
      return (
        <div>
          <div>
            <h1>All Campuses</h1>
            <button>Add Campus</button>
          </div>
          <div>
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
