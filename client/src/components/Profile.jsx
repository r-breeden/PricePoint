import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Thumbnail, Table, Checkbox, Button, Alert } from 'react-bootstrap';
import Header from './Header.jsx';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/main.scss';

const Profile = (props) => {

  const noavatar = (
    <Thumbnail className="profileavi" href="#" alt="171x180" src="http://www.wilwia.com/images/default-user.png" />
  );
  const avatar = (
    <Thumbnail className="profileavi" href="#" alt="171x180" src={`${props.user.userphoto}`} />
  );
  console.log(props);
  return (
    <Grid>
      <Row>
        <Col xs={6} md={3}>
          {props.user.userphoto === undefined ? noavatar : avatar}
        </Col>
        <Col xs={6} md={9}>
          <h2>{props.user.email}</h2>
          <a href='/logout'>Log out</a> | <Link to='/'>Home</Link>
        </Col>
      </Row>
      <Row>
        {props.user.watchList.length > 0 &&
          <Table responsive striped condensed bordered hover>
            <thead>
              <tr>
                <th>Followed Items</th>
                <th>Current Lowest Price</th>
                <th>Track</th>
              </tr>
            </thead>
            <tbody>
              {props.user.watchList.map((el, i) => {
                return (
                  <tr>
                    <td><Link to="/product">{el.item}</Link></td>
                    <td>{el.lowestPrice}</td>
                    <td><Checkbox></Checkbox></td>
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
        }


      </Row>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    'user': state.user
  };
};

export const UnwrappedProfile = Profile;
export default connect(mapStateToProps)(Profile);
