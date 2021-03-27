import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import { createCampus } from '../../store/storeComponents/campusStoreComponents/createCampus';
import { singleCampus } from '../../store/storeComponents/campusStoreComponents/singleCampus';
import { updateCampus } from '../../store/storeComponents/campusStoreComponents/updateCampus';

class NewCampusForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      addressExtended: '',
      imageURL: '',
      description: '',
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
    if (!this.props.match.params.campusId) {
      this.props.createCampus({
        ...this.state,
        addressExtended: `${this.state.city}, ${this.state.state} ${this.state.zipCode}`,
      });
    }
  }

  componentDidMount() {
    if (this.props.match.params.campusId) {
      this.props.singleCampus(this.props.match.params.campusId);
      this.setState({ ...this.props.campus });
    }
  }

  componentDidUpdate(prevProps) {
    console.log(
      'needs to change',
      '1',
      this.props.campus.id,
      '2',
      prevProps.campus.id * 1
    );
    if (this.props.campus.id !== prevProps.campus.id) {
      this.setState({ ...this.props.campus });
    }
  }

  render() {
    const {
      name,
      address,
      city,
      state,
      zipCode,
      imageURL,
      description,
    } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <Router>
        {!this.props.match.params.campusId ? (
          <h1 className="center">New Campus</h1>
        ) : (
          <h1 className="center">Edit Campus</h1>
        )}
        <form id="newCampusForm" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Campus Name:</label>
            <input name="name" value={name} onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="address">Street Address:</label>
            <input name="address" value={address} onChange={handleChange} />
            <label htmlFor="city"> City:</label>
            <input name="city" value={city} onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="state">State:</label>
            <input name="state" value={state} onChange={handleChange} />
            <label htmlFor="zipCode"> ZIP Code:</label>
            <input name="zipCode" value={zipCode} onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="imageURL">Image URL:</label>
            <input name="imageURL" value={imageURL} onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="description">Campus Description:</label>
            <textarea
              type="text"
              name="description"
              value={description}
              onChange={handleChange}
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

const mapStateToProps = ({ campus }) => {
  return {
    campus,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    createCampus: (campus) => {
      dispatch(createCampus(campus, history));
    },
    singleCampus: (campusId) => {
      dispatch(singleCampus(campusId));
    },
    updateCampus: (campus) => {
      dispatch(updateCampus(campus, history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCampusForm);
