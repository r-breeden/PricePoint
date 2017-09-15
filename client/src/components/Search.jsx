import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Grid, Row, Col } from 'react-bootstrap';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import '../styles/main.scss';
import actions from '../store/actions/searchActions.js';
import store from '../store';
import { connect } from 'react-redux';
import { toggleLoading } from '../store/actions/loading.js';

const Search = ({ toggleLoading }) => {
  let input;
  return (
    <Row>
      <Col md={4}>
        <Form
          onSubmit={e => {
            e.preventDefault();
            store.dispatch(actions.searchAmazon(input.value));
            { toggleLoading(true); }
          }}
        >
          <FormGroup>
            <FormControl
              type="text"
              className="searchBar"
              inputRef={ ref => {
                input = ref;
              }}
              placeholder="Search for an item"
            />
          </FormGroup>
        </Form>
      </Col>
    </Row>
  );
};

//export default Search;

//get state
const mapStateToProps = state => ({
  isLoading: state.isLoading
});

//subscribe to the state
export default connect(mapStateToProps)(Search);

