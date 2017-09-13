import React from 'react';
import ReactDOM from 'react-dom';
import { Col, Row } from 'react-bootstrap';
import ResultsEntries from './ResultsEntries.jsx';

const Results = () => {
  return (
    <div>
      <Col xs={12} md={6} lg={4}>
        <Row>
          <ResultsEntries></ResultsEntries>
        </Row>
      </Col>
    </div>
  );
};

export default Results;
