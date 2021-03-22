import React, { Component } from 'react';
import { connect } from 'react-redux';
import { singleCampus } from '../../store/singleCampus.js';

class SingleCampus extends Component {
  componentDidMount() {
    const campusId = this.props.match.params.campusId * 1;
    this.props.singleCampus(campusId);
  }
  render() {
    return (
      <div>
        <h1>{this.props.campus.name}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    campus: state.campus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    singleCampus: (campusId) => {
      dispatch(singleCampus(campusId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
