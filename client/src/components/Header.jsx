import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import HeaderNav from './HeaderNav.jsx';

const Header = () => {
  return (
    <Grid>
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
            <HeaderNav></HeaderNav>
          </Navbar>
        </Col>
      </Row>
    </Grid>
  );
};

export default Header;
