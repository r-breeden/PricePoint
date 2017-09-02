import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap'; 
import { } from 'react-bootstrap';    


const Signup = () => {
  return (
    <div>
      <Grid>
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
              <Button bsSize="large" bsStyle="warning">Signup</Button>
            </Form>
            <div>
              <PageHeader></PageHeader>
              Or signup with any of the following services:
              <br/>
              <a href="/auth/facebook">
                <img style={fblogo} src="/assets/fb-logo.png"/>
              </a>
              <a href="/auth/google">
                <img style={googlogo} src="/assets/google-logo.png"/>
              </a>
              <a href="/auth/twitter">
                <img style={twitlogo} src="/assets/twitter-logo.png"/>
              </a>
            </div>
            <PageHeader></PageHeader>
            <div>
              <p>
                Already have an account?
                <a href="/signup"> Login</a>
              </p>
              <p>
                Or go <a href="/">home</a>
              </p>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Signup; 