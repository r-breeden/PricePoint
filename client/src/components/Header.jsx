import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Navbar, Nav, NavItem, Button, Glyphicon } from 'react-bootstrap';
import Login from './Login.jsx';

const Header = () => {
  return (
    <Grid fluid>
      <Row>
        <Col md={12}>
          <Navbar fixedTop fluid collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <img className="logo" src="https://image.flaticon.com/icons/svg/534/534884.svg" />
                <a className="brand-name" href="/">PricePoint</a>

                <small className="blurb"> a powerful price tracking tool</small>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
              </Nav>
              <Nav pullRight>
                <NavItem className="menu-items" eventKey={1} href="/login"><Glyphicon glyph="log-in"/> Log In</NavItem>
                <NavItem className="menu-items" eventKey={2} href="/signup"><Glyphicon glyph="user"/> Sign Up</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Grid>
  );
};

export default Header;
