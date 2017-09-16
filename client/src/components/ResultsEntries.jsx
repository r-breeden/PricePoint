import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'react-bootstrap';
import { Thumbnail, Button, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/main.scss';
import Track from './Track.jsx';

const ResultsEntries = (props) => (
  <Row>
    {props.results.map((el) => {
      return (
        <Col xs={12} md={6} lg={4}>
          <Thumbnail className="results-thumb" src={`${el.imageURL}`}>
            <Link to={`/product/${el.upc}`}>
              <h3>{el.title}</h3>
            </Link>
            <p>{el.description}</p>
            <p>
              <Track />&nbsp;
              <a target="_blank" href={`${el.itemURL}`}><Button bsStyle="default"> ${el.price / 100}</Button>
              </a>
            </p>
          </Thumbnail>
        </Col>
      );
    })}
  </Row>
);

const mapStateToProps = (state) => {
  return {
    'results': state.results
  };
};

export const UnwrappedResultsEntries = ResultsEntries;
export default connect(mapStateToProps)(ResultsEntries);
