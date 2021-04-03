import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStudents } from '../../store/storeComponents/studentStoreComponents/getStudents';
import StudentTab from './StudentTab.jsx';
import { orderBy, filter } from 'lodash';

class AllStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: props.students,
      filtered: false,
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
    let students;
    let filtered;
    if (ev.target.value === 'unregistered') {
      students = filter(this.props.students, ['CampusId', null]);
      filtered = true;
    } else {
      students = orderBy(this.props.students, [ev.target.value], ['asc']);
      filtered = false;
    }
    this.setState({ students, filtered });
  }

  componentDidUpdate(prevProps) {
    if (
      this.state.students.length !== this.props.students.length &&
      this.state.filtered === false
    ) {
      this.setState({ ...this.state, students: this.props.students });
    } else if (
      this.state.filtered === true &&
      this.props.students.length !== prevProps.students.length
    ) {
      let students = filter(this.props.students, ['CampusId', null]);
      this.setState({ ...this.state, students });
    }
  }

  render() {
    const students =
      this.state.students.length || this.state.filtered === true
        ? this.state.students
        : this.props.students;
    if (this.state.students.length === 0 && this.state.filtered === false) {
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
          <div className="sort">
            <label htmlFor="studentSort">Display: </label>
            <select name="studentSort" onChange={this.onSelect}>
              <option value={''}>{'--Display Selection--'}</option>
              <option value={'lastName'}>{'Sort By Last Name'}</option>
              <option value={'gpa'}>{'Sort By GPA'}</option>
              <option value={'unregistered'}>
                {'Only Unregistered Students'}
              </option>
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
