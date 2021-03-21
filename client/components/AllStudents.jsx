import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStudents } from '../store/thunks';
import StudentTab from './StudentTab.jsx';

class AllStudents extends Component {
  componentDidMount() {
    this.props.getStudents();
  }
  render() {
    const students = this.props.students;
    if (!students) {
      return <h1>...loading</h1>;
    } else {
      return (
        <div>
          <div>
            <h1>All Students</h1>
            <button>Add Student</button>
          </div>
          <div>
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
