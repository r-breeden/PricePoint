import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Grid, Row, Col } from 'react-bootstrap';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import '../styles/main.scss';
import actions from '../store/actions/searchActions.js';
import store from '../store';

const Search = () => {
  let input;
    return (
      <Row>
        <Col md={12}>
          <Form
            onSubmit={e => {
              e.preventDefault();
              store.dispatch(actions.searchAmazon(input.value));
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
}

export default Search;
