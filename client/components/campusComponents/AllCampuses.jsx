import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCampuses } from '../../store/storeComponents/campusStoreComponents/getCampuses';
import CampusTab from './CampusTab.jsx';

class AllCampuses extends Component {
  constructor() {
    super();
    this.addCampus = this.addCampus.bind(this);
  }
  componentDidMount() {
    this.props.getCampuses();
  }

  addCampus() {
    this.props.history.push('/campuses/addCampus');
  }

  render() {
    const campuses = this.props.campuses;
    if (campuses.length === 0) {
      return (
        <div className="center">
          <h1>All Campuses</h1>
          <h3>There are no campuses registered in the database.</h3>
          <button onClick={this.addCampus}>Add Campus</button>
        </div>
      );
    } else {
      return (
        <div>
          <div className="listHeader">
            <h1>All Campuses</h1>
            <button onClick={this.addCampus}>Add Campus</button>
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

const mapStateToProps = ({ campuses }) => {
  return {
    campuses,
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
