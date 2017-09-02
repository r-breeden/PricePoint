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
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Signup; 
