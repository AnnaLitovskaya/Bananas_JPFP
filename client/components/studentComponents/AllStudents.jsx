import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStudents } from '../../store/storeComponents/getStudents';
import StudentTab from './StudentTab.jsx';

class AllStudents extends Component {
  componentDidMount() {
    this.props.getStudents();
  }
  render() {
    const students = this.props.students;
    if (students.length === 0) {
      return (
        <div className="emptyPage">
          <h1>All Students</h1>
          <h3>There are no students registered in the database.</h3>
          <button>Add Student</button>
        </div>
      );
    } else {
      return (
        <div>
          <div className="listHeader">
            <h1>All Students</h1>
            <button>Add Student</button>
          </div>
          <div id="studentListing">
            {students.map((student) => {
              return (
                <div key={student.id}>
                  <StudentTab tab={student} />
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
    students: state.students,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStudents: () => {
      dispatch(getStudents());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);
