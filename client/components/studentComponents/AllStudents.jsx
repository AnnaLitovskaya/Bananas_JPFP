import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStudents } from '../../store/storeComponents/studentStoreComponents/getStudents';
import StudentTab from './StudentTab.jsx';
import { orderBy } from 'lodash';

class AllStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: props.students,
    };
    this.addStudent = this.addStudent.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }
  componentDidMount() {
    this.props.getStudents();
  }

  addStudent() {
    this.props.history.push('/students/addStudent');
  }

  onSelect(ev) {
    const students = orderBy(this.props.students, [ev.target.value], ['asc']);
    this.setState({ students });
  }

  render() {
    const students = this.state.students.length
      ? this.state.students
      : this.props.students;
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
          <div>
            <label className="sort" htmlFor="studentSort">
              Sort Students By:{' '}
            </label>
            <select name="studentSort" onChange={this.onSelect}>
              <option value={''}>{'--Sort Selection--'}</option>
              <option value={'lastName'}>{'Last Name'}</option>
              <option value={'gpa'}>{'GPA'}</option>
            </select>
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

const mapStateToProps = ({ students }) => {
  return {
    students,
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
