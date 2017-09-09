import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Navbar, Nav, NavItem, Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';

const Header = (props) => {
  const loggedIn = (
    <Nav pullRight>
      <NavItem className="menu-items" eventKey={1}>
        <Link to="/profile">
          <Glyphicon glyph="user"/> Profile
        </Link>
      </NavItem>
      <Navbar.Text>
        <Navbar.Link href='/logout' className="menu-items logout">
          <Glyphicon glyph="log-out"/> Log Out
        </Navbar.Link>
      </Navbar.Text>
    </Nav>
  );
  const loggedOut = (
    <Nav pullRight>
      <NavItem className="menu-items" eventKey={1}>
        <Link to="/login">
          <Glyphicon glyph="log-in"/> Log In
        </Link>
      </NavItem>
      <NavItem className="menu-items" eventKey={2}>
        <Link to="/signup">
          <Glyphicon glyph="user"/> Sign Up
        </Link>
      </NavItem>
    </Nav>
  );
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
              {Object.keys(props.user).length === 0 ? loggedOut : loggedIn}
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Grid>
  );
};
const mapStateToProps = (state) => {
  return{
    'user': state.user
  };
};

export const UnwrappedHeader = Header;
export default connect(mapStateToProps)(Header);
