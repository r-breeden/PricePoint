import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import {
  Button, Glyphicon, PageHeader,
  Form, FormGroup, ControlLabel, FormControl,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';


const Signup = () => {
  return (
    <div >
      <Grid>
        <Row>
          <Col sm={6} smOffset={3}>
            <h1>
              <span>
                Signup
              </span>
            </h1>
            {/* some conditional rendering logic:
            if (message.length) { %>
            <div class="alert alert-danger"><%= message %></div>
            <% } */}
            <Form>
              <FormGroup controlId="formBasicText">
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
              <FormGroup controlId="formBasicText">
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
              <FormGroup controlId="formBasicText">
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
              <FormGroup controlId="formBasicText">
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
              <Button bsSize="large" bsStyle="warning">Signup</Button>
            </Form>
            <div>
              <PageHeader></PageHeader>
              Or signup with any of the following services:
              <br/>
              <a href="/auth/facebook">
                <img className="logo" src="/assets/facebook.svg"/>
              </a>
              <a href="/auth/google">
                <img className="logo" src="/assets/google.svg"/>
              </a>
              <a href="/auth/twitter">
                <img className="logo" src="/assets/twitter.svg"/>
              </a>
            </div>
            <PageHeader></PageHeader>
            <div>
              <p>
                Already have an account?
                <Link to="/login"> Login</Link>
              </p>
              <p>
                Or go <Link to="/">home</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Signup;
