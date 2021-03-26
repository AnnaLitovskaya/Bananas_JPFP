import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import { createStudent } from '../../store/storeComponents/studentStoreComponents/createStudent';

class NewStudentForm extends Component {
  constructor() {
    super();
    this.state = {
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
    this.props.createStudent({
      ...this.state,
    });
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
            <input name="firstName" value={firstName} onChange={handleChange} />
            <label htmlFor="lastName">Last Name:</label>
            <input name="lastName" value={lastName} onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="imageURL">Image URL:</label>
            <input name="imageURL" value={imageURL} onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input name="email" value={email} onChange={handleChange} />
            <label htmlFor="gpa">GPA:</label>
            <input
              type="number"
              name="gpa"
              value={gpa}
              onChange={handleChange}
              min="1"
              max="4"
              step=".05"
            />
          </div>

          <div>
            <button type="submit">Submit</button>
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    createStudent: (student) => {
      dispatch(createStudent(student, history));
    },
  };
};

export default connect(null, mapDispatchToProps)(NewStudentForm);
