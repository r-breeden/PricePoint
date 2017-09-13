import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'react-bootstrap';
import { Form, FormGroup, FormControl } from 'react-bootstrap';
import '../styles/main.scss';

const ProfileInput = () => {
  return (
    <Row>
      <Form>
        <FormGroup
          controlId="formBasicText"
        >
          <FormControl
            type="text"
            placeholder="Create a New Category"
          />
          <FormControl.Feedback />
        </FormGroup>
      </Form>
    </Row>
  );
};

export default ProfileInput;
