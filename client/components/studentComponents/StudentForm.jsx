import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import { createStudent } from '../../store/storeComponents/studentStoreComponents/createStudent';
import { singleStudent } from '../../store/storeComponents/studentStoreComponents/singleStudent';
import { updateStudent } from '../../store/storeComponents/studentStoreComponents/updateStudent';

class StudentForm extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      imageURL: '',
      gpa: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    if (!this.props.match.params.studentId) {
      this.props.createStudent(this.state);
      this.setState({ ...this.state });
    } else {
      this.props.updateStudent(this.state);
      this.setState({ ...this.state });
    }
  }

  componentDidMount() {
    if (this.props.match.params.studentId) {
      this.props.singleStudent(this.props.match.params.studentId);
      this.setState(this.props.student);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.student.id !== prevProps.student.id) {
      this.setState(this.props.student);
    }
  }

  render() {
    const { firstName, lastName, email, imageURL, gpa } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <Router>
        <h1 className="center">New Student</h1>
        <form id="newStudentForm" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              required
              name="firstName"
              value={firstName}
              onChange={handleChange}
            />
            <label htmlFor="lastName">Last Name:</label>
            <input
              required
              name="lastName"
              value={lastName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="imageURL">Image URL:</label>
            <input
              type="url"
              name="imageURL"
              value={imageURL}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <label htmlFor="gpa">GPA:</label>
            <input
              required
              type="number"
              name="gpa"
              value={gpa}
              onChange={handleChange}
              min="0"
              max="4"
              step=".1"
            />
          </div>

          <div>
            <button type="submit">Submit</button>
            <Link to="/students">
              <button>Cancel</button>
            </Link>
          </div>
        </form>
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
    createStudent: (student) => {
      dispatch(createStudent(student, history));
    },
    singleStudent: (studentId) => {
      dispatch(singleStudent(studentId));
    },
    updateStudent: (student) => {
      dispatch(updateStudent(student, history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
