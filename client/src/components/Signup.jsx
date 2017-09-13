import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignupForm from './SignupForm.jsx'; 
import OAuth from './OAuth.jsx';


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
            <SignupForm></SignupForm>
            <OAuth></OAuth>
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
