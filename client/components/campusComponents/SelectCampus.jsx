import React, { Component } from 'react';
import { getCampuses } from '../../store/storeComponents/campusStoreComponents/getCampuses';
import { connect } from 'react-redux';
import { changeStudentCampus } from '../../store/storeComponents/studentStoreComponents/changeStudentCampus';
import { singleCampus } from '../../store/storeComponents/campusStoreComponents/singleCampus';
import { withRouter } from 'react-router-dom';

class SelectCampus extends Component {
  constructor() {
    super();
    this.onSelect = this.onSelect.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.props.getCampuses();
  }

  onSelect(ev) {
    this.props.singleCampus(ev.target.value);
  }

  onSubmit(ev) {
    ev.preventDefault();
    this.props.changeStudentCampus(this.props.student, this.props.campus);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div id="campusSelect">
          <label htmlFor="campus">Select Campus: </label>
          <select name="campus" onChange={this.onSelect}>
            <option value={''}>{'--Select Campus--'}</option>
            {this.props.campuses.map((campus) => {
              return (
                <option key={campus.id} value={campus.id}>
                  {campus.name}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit">Change Campus</button>
      </form>
    );
  }
}

const mapStateToProps = ({ campuses, campus }) => {
  return {
    campuses,
    campus,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    getCampuses: () => {
      dispatch(getCampuses());
    },
    singleCampus: (campusId) => {
      dispatch(singleCampus(campusId));
    },
    changeStudentCampus: (student, campus) => {
      dispatch(changeStudentCampus(student, campus, history));
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SelectCampus)
);
