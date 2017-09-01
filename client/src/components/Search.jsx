import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap'; 
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap'; 

const Search = () => {
  return (
    <Row>
      <Col md={12}>
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
      </Col>
    </Row>
  );
};
  

export default Search; 