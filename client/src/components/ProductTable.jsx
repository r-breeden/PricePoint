import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Table, Glyphicon } from 'react-bootstrap';

const ProductTable = () => {
  return (
    <Row>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th><a href='#'>Amazon</a></th>
            <th><a href='#'>Walmart</a></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>September 10, 2017</td>
            <td className="lower"><Glyphicon glyph="minus"/> $310.82 </td>
            <td className="higher"><Glyphicon glyph="minus"/> $390.96 </td>
          </tr>
          <tr>
            <td>September 09, 2017</td>
            <td><Glyphicon glyph="arrow-down"/> $310.82 </td>
            <td><Glyphicon glyph="minus"/> $390.96 </td>
          </tr>
          <tr>
            <td>September 08, 2017</td>
            <td><Glyphicon glyph="arrow-down"/> $314.39 </td>
            <td><Glyphicon glyph="minus"/> $390.96 </td>
          </tr>
          <tr>
            <td>September 07, 2017</td>
            <td><Glyphicon glyph="minus"/> $315.00 </td>
            <td><Glyphicon glyph="minus"/> $390.96 </td>
          </tr>
          <tr>
            <td>September 06, 2017</td>
            <td><Glyphicon glyph="minus"/> $315.00</td>
            <td><Glyphicon glyph="minus"/> $390.96</td>
          </tr>
        </tbody>
      </Table>
    </Row>
  );
};

export default ProductTable;
