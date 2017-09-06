import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Navbar, Button, Glyphicon } from 'react-bootstrap';
import Login from './Login.jsx';

const Header = () => {
  return (
    <Grid fluid>
      <Row>
        <Col md={12}>
          <Navbar fixedTop fluid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">PricePoint</a>
                <small> a powerful price tracker tool</small>
              </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Text pullRight>
              <Button>
                <a href='/login'><Glyphicon glyph="log-in"/></a>
              </Button>
            </Navbar.Text>
          </Navbar>
        </Col>
      </Row>
    </Grid>
  );
};

export default Header;
