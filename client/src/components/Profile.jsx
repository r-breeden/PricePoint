import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Thumbnail, Table, Checkbox, Button } from 'react-bootstrap';
import Header from './Header.jsx';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/main.scss';

const Profile = (props) => {
  console.log(props);
  return (
    <Grid>
      <Header></Header>
      <Row>
        <Col xs={6} md={3}>
          <Thumbnail className="profileavi" href="#" alt="171x180" src={`${props.user.userphoto}`} />
        </Col>
        <Col xs={6} md={9}>
          <h2>{props.user.username}</h2>
          <a href='/logout'>Log out</a> | <Link to='/'>Home</Link>
        </Col>
      </Row>
      <Row>
        <Table responsive striped condensed bordered hover>
          <thead>
            <tr>
              <th>Followed Items</th>
              <th>Current Lowest Price</th>
              <th>Track</th>
            </tr>
          </thead>
          <tbody>
            {props.user.followed.map((el, i) => {
              return (
                <tr>
                  <td><Link to="/product">{el.item}</Link></td>
                  <td>{el.lowestprice}</td>
                  <td><Checkbox checked="true"></Checkbox></td>
                </tr>
              );
            })}
            <tr>
              <td></td>
              <td></td>
              <td><Button bsStyle="primary">Notify Me!</Button></td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    'user': state.currentUser
  };
};

export const UnwrappedProfile = Profile;

export default connect(mapStateToProps)(Profile);
