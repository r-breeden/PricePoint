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
            <div>
              <PageHeader></PageHeader>
              Or signup with any of the following services:
              <br/>
              <a href="/auth/facebook">
                <img className="fblogo" src="/assets/facebook.svg"/>
              </a>
              <a href="/auth/google">
                <img className="googlogo" src="/assets/google.svg"/>
              </a>
              <a href="/auth/twitter">
                <img className="twitlogo" src="/assets/twitter.svg"/>
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
