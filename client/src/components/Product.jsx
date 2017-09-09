import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Thumbnail, Table, Button, Glyphicon } from 'react-bootstrap';
import Header from './Header.jsx';
import { connect } from 'react-redux';

const Product = (props) => {
  var productItem = [];

  var getProductDataFromState = () => {
    var UPC = window.location.href.slice(30);
    props.results.forEach ( (item) => {
      if ( item.upc === UPC ) {
        productItem.push(item);
      }
    });

  };
  getProductDataFromState();

  let sendToProductPage = () => {
    window.open(productItem[0].itemURL);
  };

  return (
    <div className="productContainer">
      <Row>
        <Col xs={6} md={3}>
          <Thumbnail className="productImage" href="#" src={productItem[0].imageURL} />
        </Col>
        <Col xs={6} md={9}>
          <h2 className="title">{productItem[0].title}</h2>
          <b className="descriptionTitle">DESCRIPTION: </b>
          <b className="description">{productItem[0].description}</b>
        </Col>
        <Button onClick={sendToProductPage}>BUY NOW</Button>
      </Row>
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    'results': state.results
  };
};

export default connect(mapStateToProps)(Product);
