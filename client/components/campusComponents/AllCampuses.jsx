import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCampuses } from '../../store/storeComponents/campusStoreComponents/getCampuses';
import CampusTab from './CampusTab.jsx';
import { orderBy, filter } from 'lodash';
// import Paginate from '../Paginate.jsx';

class AllCampuses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campuses: props.campuses,
      filtered: false,
      sort: '',
    };
    this.addCampus = this.addCampus.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }
  async componentDidMount() {
    await this.props.getCampuses();
  }

  addCampus() {
    this.props.history.push('/campuses/addCampus');
  }

  onSelect(ev) {
    let campuses;
    let filtered;
    let sort;
    if (ev.target.value === 'numStudents') {
      campuses = orderBy(
        this.props.campuses,
        function (campus) {
          return campus.Students.length;
        },
        ['asc']
      );
      filtered = false;
      sort = 'numStudents';
    } else if (ev.target.value === 'unregistered') {
      campuses = filter(this.props.campuses, function (campus) {
        return campus.Students.length === 0;
      });
      filtered = true;
    } else {
      campuses = orderBy(this.props.campuses, [ev.target.value], ['asc']);
      filtered = false;
      sort = 'name';
    }
    this.setState({ campuses, filtered, sort });
  }

  componentDidUpdate(prevProps) {
    if (
      this.state.campuses.length !== this.props.campuses.length &&
      this.state.filtered === false &&
      this.state.campuses.length !== 0
    ) {
      let campuses;
      if (this.state.sort === 'numStudents') {
        campuses = orderBy(
          this.props.campuses,
          function (campus) {
            return campus.Students.length;
          },
          ['asc']
        );
      } else {
        campuses = orderBy(this.props.campuses, ['name'], ['asc']);
      }
      this.setState({ ...this.state, campuses });
    } else if (
      this.state.filtered === true &&
      this.props.campuses.length !== prevProps.campuses.length
    ) {
      let campuses = filter(this.props.campuses, function (campus) {
        return campus.Students.length === 0;
      });
      this.setState({ ...this.state, campuses });
    }
  }

  render() {
    const campuses =
      this.state.campuses.length || this.state.filtered === true
        ? this.state.campuses
        : this.props.campuses;
    if (campuses.length === 0 && this.state.filtered === false) {
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
          <div className="listHeader">
            <div className="sort">
              <label htmlFor="campusSort">Display: </label>
              <select name="campusSort" onChange={this.onSelect}>
                <option value={''}>{'--Display Selection--'}</option>
                <option value={'numStudents'}>
                  {'Sort By Number Of Students'}
                </option>
                <option value={'name'}>{'Sort By Campus name'}</option>
                <option value={'unregistered'}>
                  {'Campuses With No Students'}
                </option>
              </select>
            </div>
            {/* <Paginate page={'campus'} value={campuses.length} /> */}
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
