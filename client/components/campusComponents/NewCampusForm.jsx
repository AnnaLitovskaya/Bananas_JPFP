import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import { createCampus } from '../../store/storeComponents/createCampus';

class NewCampusForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      addressExtended: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  async handleSubmit(evt) {
    await this.setState({
      addressExtended: `${this.state.city}, ${this.state.state} ${this.state.zipCode}`,
    });
    evt.preventDefault();
    this.props.createCampus({ ...this.state });
  }

  render() {
    const { name, address, city, state, zipCode } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <Router>
        <form id="newCampusForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Campus Name:</label>
          <input name="name" value={name} onChange={handleChange} />

          <label htmlFor="address">Street Address:</label>
          <input name="address" value={address} onChange={handleChange} />

          <label htmlFor="city">City:</label>
          <input name="city" value={city} onChange={handleChange} />

          <label htmlFor="state">State:</label>
          <input name="state" value={state} onChange={handleChange} />

          <label htmlFor="zipCode">zipCode:</label>
          <input name="zipCode" value={zipCode} onChange={handleChange} />

          <button type="submit">Submit</button>
          <Link to="/">Cancel</Link>
        </form>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    createCampus: (campus) => {
      dispatch(createCampus(campus, history));
    },
  };
};

export default connect(null, mapDispatchToProps)(NewCampusForm);
