import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Grid, Row, Col } from 'react-bootstrap';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import '../styles/main.scss';
import actions from '../store/actions/searchActions.js';
import store from '../store';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
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
    var query = this.state.value;
    store.dispatch(actions.searchAmazon(this.state.value));
    console.log('A name was submitted: ' + this.state.value);
  }
  submit(values) {
    console.log('we worked!');
  }
  render() {
    return (
      <Row>
        <Col md={12}>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <FormControl
                type="text"
                className="searchBar"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Search for an item"
              />
            </FormGroup>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Search;
