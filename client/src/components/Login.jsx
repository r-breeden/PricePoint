import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm.jsx';
import OAuth from './OAuth.jsx';

const Login = () => {
  return (
    <div>
      <Grid>
        <Row>
          <Col sm={6} smOffset={3}>
            <h1>
              <span>
                Login
              </span>
            </h1>
            <LoginForm></LoginForm>
            <OAuth></OAuth>
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
