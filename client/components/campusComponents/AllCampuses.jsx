import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCampuses } from '../../store/storeComponents/campusStoreComponents/getCampuses';
import CampusTab from './CampusTab.jsx';
import { orderBy } from 'lodash';

class AllCampuses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campuses: props.campuses,
    };
    this.addCampus = this.addCampus.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }
  componentDidMount() {
    this.props.getCampuses();
  }

  addCampus() {
    this.props.history.push('/campuses/addCampus');
  }

  onSelect(ev) {
    let campuses;
    if (ev.target.value === 'numStudents') {
      campuses = orderBy(
        this.props.campuses,
        function (campus) {
          return campus.Students.length;
        },
        ['asc']
      );
    } else {
      campuses = orderBy(this.props.campuses, [ev.target.value], ['asc']);
    }
    this.setState({ campuses });
  }

  render() {
    const campuses = this.state.campuses.length
      ? this.state.campuses
      : this.props.campuses;
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
          <div>
            <label className="sort" htmlFor="campusSort">
              Sort Campus By:{' '}
            </label>
            <select name="campusSort" onChange={this.onSelect}>
              <option value={''}>{'--Sort Selection--'}</option>
              <option value={'numStudents'}>{'# Of Students'}</option>
              <option value={'name'}>{'Campus name'}</option>
            </select>
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
