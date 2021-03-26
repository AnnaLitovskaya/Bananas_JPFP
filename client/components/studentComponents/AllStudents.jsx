import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStudents } from '../../store/storeComponents/studentStoreComponents/getStudents';
import StudentTab from './StudentTab.jsx';

class AllStudents extends Component {
  constructor() {
    super();
    this.addStudent = this.addStudent.bind(this);
  }
  componentDidMount() {
    this.props.getStudents();
  }

  addStudent() {
    this.props.history.push('/students/addStudent');
  }

  render() {
    const students = this.props.students;
    if (students.length === 0) {
      return (
        <div className="center">
          <h1>All Students</h1>
          <h3>There are no students registered in the database.</h3>
          <button onClick={this.addStudent}>Add Student</button>
        </div>
      );
    } else {
      return (
        <div>
          <div className="listHeader">
            <h1>All Students</h1>
            <button onClick={this.addStudent}>Add Student</button>
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
