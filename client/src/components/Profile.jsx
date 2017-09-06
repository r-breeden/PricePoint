import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Thumbnail, Table, Checkbox} from 'react-bootstrap';
import Header from './Header.jsx';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <Grid>
      <Header></Header>
      <Row>
        <Col xs={6} md={3}>
          <Thumbnail href="#" alt="171x180" src="http://rougier.github.io/bootstrap-rst/171x180.png" />
        </Col>
        <Col xs={6} md={9}>
          <h2>Username</h2>
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
            <tr>
              <td><Link to="/product">Item 1</Link></td>
              <td>$$</td>
              <td><Checkbox></Checkbox></td>
            </tr>
            <tr>
              <td><Link to="/product">Item 2</Link></td>
              <td>$$</td>
              <td><Checkbox></Checkbox></td>
            </tr>
            <tr>
              <td><Link to="/product">Item 3</Link></td>
              <td>$$</td>
              <td><Checkbox></Checkbox></td>
            </tr>
            <tr>
              <td><Link to="/product">Item 4</Link></td>
              <td>$$</td>
              <td><Checkbox></Checkbox></td>
            </tr>
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



export default Profile;
