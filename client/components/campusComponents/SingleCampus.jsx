import React, { Component } from 'react';
import { connect } from 'react-redux';
import { singleCampus } from '../../store/storeComponents/singleCampus';
import { HashRouter as Router } from 'react-router-dom';
import StudentTab from '../studentComponents/StudentTab.jsx';

class SingleCampus extends Component {
  componentDidMount() {
    const campusId = this.props.match.params.campusId * 1;
    this.props.singleCampus(campusId);
  }
  render() {
    const campus = this.props.campus;
    console.log(campus.Students);
    if (!campus) {
      return <h1>...loading</h1>;
    } else {
      return (
        <Router>
          <div id="singleCampus">
            <div>
              <img
                src={
                  campus.imageURL
                    ? campus.imageURL.slice(0, campus.imageURL.length - 3) +
                      '400'
                    : ''
                }
              />
              <p>
                {campus.address} <br />
                {campus.addressExtended}
              </p>
            </div>
            <div>
              <h1>{campus.name}</h1>
              <p>{campus.description}</p>
              <div>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
          <div className="listHeader">
            <h1>Students on Campus</h1>
            <button>Add Students</button>
          </div>
          {campus.Students && campus.Students.length ? (
            <div id="studentListing">
              {campus.Students.map((student) => {
                return (
                  <div key={student.id}>
                    <StudentTab campus={true} tab={student} />
                  </div>
                );
              })}
            </div>
          ) : (
            <h3 className="emptyPage">
              There are no students currently registered to this campus.
            </h3>
          )}
        </Router>
      );
    }
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
