import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <Form action="/login" method="post">
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
      <Button type="submit" bsSize="large" bsStyle="warning">Login</Button>
    </Form>
  );
};

export default LoginForm;
