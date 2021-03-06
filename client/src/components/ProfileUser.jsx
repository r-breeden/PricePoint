import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'react-bootstrap';
import { Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/main.scss';

const ProfileUser = (props) => {
  return (
    <Row>
      <Col xs={6} md={3}>
        <Thumbnail className="profileavi" href="#" alt="171x180" src={`${props.user.photo_path}`} />
      </Col>
      <Col xs={6} md={9}>
        <h2>{props.user.email}</h2>
        <a href='/logout'>Log out</a> | <Link to='/'>Home</Link>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    'user': state.user,
  };
};

export const UnwrappedProfile = ProfileUser;
export default connect(mapStateToProps)(ProfileUser);
