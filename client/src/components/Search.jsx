import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap'; 
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap'; 

const Search = () => {
  return (
    <Form inline>
      <FormGroup>
        <FormControl
          type="text"
          placeholder="Search for an item"
        />
      </FormGroup>
      {' '}
      <Button>
        Submit
      </Button>
    </Form>
  );
};
  

export default Search; 