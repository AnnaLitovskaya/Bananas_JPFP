import React, { Component } from 'react';
import { withRouter, HashRouter as Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteCampus } from '../../store/storeComponents/campusStoreComponents/deleteCampus';
import { changeStudentCampus } from '../../store/storeComponents/studentStoreComponents/changeStudentCampus';
import { singleStudent } from '../../store/storeComponents/studentStoreComponents/singleStudent';

class CampusTab extends Component {
  componentDidMount() {
    if (this.props.studentId) {
      this.props.singleStudent(this.props.studentId);
    }
  }
  render() {
    const unregisterCampus = { id: '' };
    const tab = this.props.tab;
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
                  <Link to={`/campuses/${tab.id}/edit`}>
                    <button>Edit</button>
                  </Link>
                  <button
                    onClick={() => {
                      this.props.deleteCampus(tab.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => {
                  this.props.changeStudentCampus(
                    this.props.student,
                    unregisterCampus
                  );
                }}
              >
                Unregister
              </button>
            )}
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ student }) => {
  return {
    student,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    deleteCampus: (campusId) => {
      dispatch(deleteCampus(campusId, history));
    },
    editCampus: () => {
      history.push(`/campuses/${tab.id}/edit`);
    },
    changeStudentCampus: (student, campus) => {
      dispatch(changeStudentCampus(student, campus, history));
    },
    singleStudent: (studentId) => {
      dispatch(singleStudent(studentId));
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CampusTab)
);
