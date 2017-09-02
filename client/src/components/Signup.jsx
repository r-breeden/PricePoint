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
              <Button bsSize="large" bsStyle="warning">Login</Button>
            </Form>
            
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Signup; 

// 
//         <!-- LOGIN FORM -->
//         <form action="/signup" method="post">
//             <div class="form-group">
//                 <label>Email</label>
//                 <input type="text" class="form-control" name="email">
//             </div>
//             <div class="form-group">
//                 <label>Password</label>
//                 <input type="password" class="form-control" name="password">
//             </div>
// 
//             <button type="submit" class="btn btn-warning btn-lg">Signup</button>
//         </form>
// 
//         <hr>
//         <div>
//             Or signup with any of the following services:<br />
//             <a style="margin-right:15px" href="/auth/facebook"><img src="/assets/fb-logo.png" /></a>
//             <a style="margin-left:15px;margin-right:15px" href="/auth/google"><img style="width:29px" src="/assets/google-logo.png" /></a>
//             <a style="margin-left:15px" href="/auth/twitter"><img style="width:48px" src="/assets/twitter-logo.png" /></a>
//         </div>
//         <hr>
// 
//         <p>Already have an account? <a href="/login">Login</a></p>
//         <p>Or go <a href="/">home</a>.</p>
// 
//     </div>
// 
// <% include foot.ejs%>