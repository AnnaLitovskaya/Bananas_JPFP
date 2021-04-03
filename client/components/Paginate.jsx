import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

class Paginate extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      numArr: [],
    };
  }
  componentDidMount() {
    console.log(this.props.value);
    const numPages = Math.ceil(this.props.value / 10);
    const numArr = [];
    for (let i = 1; i <= numPages; i++) {
      numArr.push(i);
    }
    this.setState({ numArr, value: this.props.value });
  }

  componentDidUpdate() {
    if (this.props.value !== this.state.value) {
      this.setState({ ...this.state, value: this.props.value });
    }
  }

  render() {
    return (
      <Router>
        <div className="paginate">
          Page:
          {this.state.numArr.map((page) => {
            return (
              <span key={page}>
                <Link
                  to={
                    this.props.page === 'campus'
                      ? `/campuses?page=${page}`
                      : `/students?page=${page}`
                  }
                >
                  {page}
                </Link>
              </span>
            );
          })}
        </div>
      </Router>
    );
  }
}
export default Paginate;
