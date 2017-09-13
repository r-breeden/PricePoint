import React from 'react';
import ReactDOM from 'react-dom';
import { Row } from 'react-bootstrap';
import { Thumbnail, Button, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/main.scss';

const ResultsEntries = (props) => {
  return (
    <Row>
      {props.results.map((el) => {
        return (
          <Thumbnail className="results-thumb" src={`${el.imageURL}`}>
            <Link to={`/product/${el.upc}`}>
              <h3>{el.title}</h3>
            </Link>
            <p>{el.description}</p>
            <p>
              <Button bsStyle="primary"><Glyphicon glyph="eye-open"/> Track</Button>&nbsp;
              <a target="_blank" href={`${el.itemURL}`}><Button bsStyle="default"> ${el.price / 100}</Button>
              </a>
            </p>
          </Thumbnail>
        );
      })}
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    'results': state.results
  };
};

export const UnwrappedSearch = ResultsEntries;
export default connect(mapStateToProps)(ResultsEntries);
