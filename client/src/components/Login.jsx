import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap'; 
import { Glyphicon, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';    


const Login = () => {
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
              <Button bsSize="large" bsStyle="warning">Login</Button>
            </Form>
          </Col>
          

        </Row>
      </Grid>
    </div>
  );
};

export default Login; 

//         <hr>
//         <div>
//             Or login with any of the following services:<br />
//             <a style="margin-right:15px" href="/auth/facebook"><img src="/assets/fb-logo.png" /></a>
//             <a style="margin-left:15px;margin-right:15px" href="/auth/google"><img style="width:29px" src="/assets/google-logo.png" /></a>
//             <a style="margin-left:15px" href="/auth/twitter"><img style="width:48px" src="/assets/twitter-logo.png" /></a>
//         </div>
//         <hr>
// 
//         <p>Need to sign up for an account? <a href="/signup">Signup</a></p>
//         <p><a href="/">home</a></p>
// 
//     </div>
// 
// <% include foot.ejs%>