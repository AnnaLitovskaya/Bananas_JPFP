import React, { Component } from 'react';
import { getCampuses } from '../../store/storeComponents/campusStoreComponents/getCampuses';
import { connect } from 'react-redux';

class SelectCampus extends Component {
  componentDidMount() {
    this.props.getCampuses();
  }
  render() {
    return (
      <div id="campusSelect">
        <label htmlFor="campus">Select Campus: </label>
        <select name="campus">
          {this.props.campuses.map((campus) => {
            return (
              <option key={campus.id} value={campus.name}>
                {campus.name}
              </option>
            );
          })}
        </select>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(SelectCampus);
