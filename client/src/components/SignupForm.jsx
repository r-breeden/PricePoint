import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  return (
    <Form action="/signup" method="post">
      <FormGroup>
        <ControlLabel>
          First Name
        </ControlLabel>
        <FormControl
          className="signup-input"
          type="text"
          name="firstName"
        />
        <FormControl.Feedback />
      </FormGroup>
      <FormGroup>
        <ControlLabel>
          Last Name
        </ControlLabel>
        <FormControl
          className="signup-input"
          type="text"
          name="lastName"
        />
        <FormControl.Feedback />
      </FormGroup>
      <FormGroup>
        <ControlLabel>
          Email
        </ControlLabel>
        <FormControl
          className="signup-input"
          type="text"
          name="email"
        />
        <FormControl.Feedback />
      </FormGroup>
      <FormGroup>
        <ControlLabel>
          Password
        </ControlLabel>
        <FormControl
          className="signup-input"
          type="password"
          name="password"
        />
        <FormControl.Feedback />
      </FormGroup>
      <Button type="submit" bsSize="large" bsStyle="warning">Signup</Button>
    </Form>
  );
};

export default SignupForm;
