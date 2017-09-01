import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap'; 
import { Thumbnail, Table } from 'react-bootstrap'; 

//temporary styling blocks
const lower = {
  backgroundColor: 'rgba(27, 135, 27, 0.61)'
};

const higher = {
  backgroundColor: 'rgba(242, 17, 17, 0.61)'
};

const Search = () => {
  return (
    <div>
      <Row>
        <Col xs={6} md={3}>
          <Thumbnail href="#" alt="171x180" src="http://rougier.github.io/bootstrap-rst/171x180.png" />
        </Col>
        <Col xs={6} md={9}>
          <h2>Title</h2>
          <b>Description</b> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </Col>
      </Row>
      <Row>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th><a href='#'>Store 1</a></th>
              <th><a href='#'>Store 1</a></th>
              <th><a href='#'>Store 1</a></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>August 31, 2017</td>
              <td style={lower}>$11.99</td>
              <td style={higher}>$800.93</td>
              <td>$233.00</td>

            </tr>
            <tr>
              <td>August 30, 2017</td>
              <td style={higher}>$12.99</td>
              <td>$569.93</td>
              <td style={lower}>$123.00</td>

            </tr>
            <tr>
              <td>August 29, 2017</td>
              <td>$12.00</td>
              <td style={lower}>$449.93</td>
              <td style={higher}>$533.00</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </div>
  );
};


export default Search; 