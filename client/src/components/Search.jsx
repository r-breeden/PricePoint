import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import '../styles/main.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      searching: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('A name was submitted: ' + this.state.value);
  }
  submit(values) {
    console.log('we worked!');
  }
  render() {
    return (
      <Row>
        <Col md={12}>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="searchBar"
              value={this.state.textbox}
              onChange={this.handleChange}
              placeholder="Search for an item"
            />
          </form>
        </Col>
      </Row>
    );
  }
}

export default Search;
