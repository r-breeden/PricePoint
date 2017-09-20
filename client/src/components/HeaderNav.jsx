import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';

const HeaderNav = (props) => {

  //on profile click update table state
  var onProfileClick = () => {
    //get user tables
    axios.get('/api/categories', {params: {id: props.user.id}})
      .then( (res) => {
        console.log('USERTABLE', res.data);
        // store.dispatch(createTable(userTables));
      })
      .catch( (error) => {
        console.log('HeaderNav react components onProfileClick function failed to get user tables from db');
      });
  };
  const loggedIn = (
    <Nav pullRight>
      <NavItem className="menu-items" eventKey={1}>
        <Link to="/profile" onClick={onProfileClick}>
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
    <Navbar.Collapse>
      <Nav>
      </Nav>
      {Object.keys(props.user).length === 0 ? loggedOut : loggedIn}
    </Navbar.Collapse>
  );
};

const mapStateToProps = (state) => {
  return {
    'user': state.user
  };
};

export const UnwrappedHeader = HeaderNav;
export default connect(mapStateToProps)(HeaderNav);
