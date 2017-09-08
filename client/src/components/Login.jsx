import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Glyphicon, Form, FormGroup, ControlLabel, FormControl, Button, PageHeader } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';

const fblogo = {
  width: '29px',
  height: '29px',
  marginRight: '15px'
};
const googlogo = {
  width: '29px',
  height: '29px',
  marginLeft: '15px',
  marginRight: '15px'
};
const twitlogo = {
  width: '48px',
  height: '48px',
  marginLeft: '15px'
};

const Login = () => {
  return (
    <div>
      <Grid>
        <Header></Header>
        <Row>
          <Col sm={6} smOffset={3}>
            <h1>
              <span>
                <Glyphicon glyph="log-in" bsSize="small"></Glyphicon> Login
              </span>
            </h1>
            {/* some conditional rendering logic:
            if (message.length) { %>
            <div class="alert alert-danger"><%= message %></div>
            <% } */}
            <Form>
              <FormGroup controlId="formBasicText">
                <ControlLabel>
                  Email
                </ControlLabel>
                <FormControl
                  type="text"
                  value=""
                  onChange=""
                />
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup controlId="formBasicText">
                <ControlLabel>
                  Password
                </ControlLabel>
                <FormControl
                  type="text"
                  value=""
                  onChange=""
                />
                <FormControl.Feedback />
              </FormGroup>
              <Button bsSize="large" bsStyle="warning">Login</Button>
            </Form>
            <div>
              <PageHeader></PageHeader>
              Or login with any of the following services:
              <br/>
              <a href="/auth/facebook">
                <img className="socialIcons" src="/assets/facebook.svg"/>
              </a>
              <a href="/auth/google">
                <img className="socialIcons" src="/assets/google.svg"/>
              </a>
              <a href="/auth/twitter">
                <img className="socialIcons" src="/assets/twitter.svg"/>
              </a>
            </div>
            <PageHeader></PageHeader>
            <div>
              <p>
                Need to sign up for an account?
                <Link to="/signup"> Signup</Link>
              </p>
              <p>
                <Link to="/">home</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Login;
