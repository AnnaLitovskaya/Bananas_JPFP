import React, { Component } from 'react';
import { getStudents } from '../../store/storeComponents/studentStoreComponents/getStudents';
import { connect } from 'react-redux';
import { changeStudentCampus } from '../../store/storeComponents/studentStoreComponents/changeStudentCampus';
import { singleStudent } from '../../store/storeComponents/studentStoreComponents/singleStudent';
import { singleCampus } from '../../store/storeComponents/campusStoreComponents/singleCampus';
import { withRouter } from 'react-router-dom';

class SelectStudent extends Component {
  constructor() {
    super();
    this.onSelect = this.onSelect.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.props.getStudents();
    if (this.props.campusId) {
      this.props.singleCampus(this.props.campusId);
    }
  }

  onSelect(ev) {
    this.props.singleStudent(ev.target.value);
  }

  onSubmit(ev) {
    ev.preventDefault();
    this.props.changeStudentCampus(this.props.student, this.props.campus);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div id="studentSelect">
          <label htmlFor="student">Select Student: </label>
          <select name="student" onChange={this.onSelect}>
            <option value={''}>{'--Select Student to Register--'}</option>
            {this.props.students.map((student) => {
              return (
                <option key={student.id} value={student.id}>
                  {student.firstName} {student.lastName}
                </option>
              );
            })}
          </select>
          <button type="submit">Change Campus</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ students, student, campus }) => {
  return {
    students,
    student,
    campus,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    getStudents: () => {
      dispatch(getStudents());
    },
    singleStudent: (studentId) => {
      dispatch(singleStudent(studentId));
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
  connect(mapStateToProps, mapDispatchToProps)(SelectStudent)
);
