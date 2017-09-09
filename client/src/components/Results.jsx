import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Thumbnail, Button, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/main.scss';

const Results = (props) => {
  
  console.log('what are the props passed? ', props);
  return (
    <div>
      <Row>
        { props.results.map((el) => {
          return (
            <Col xs={12} md={6} lg={4}>
              <Link to={`/product/${el.upc}`}>
                <Thumbnail className="results-thumb" src={`${el.imageURL}`} alt="242x200">
                  <h3>{el.title}</h3>
                  <p>{el.description}</p>
                  <p>
                    <Button bsStyle="primary"><Glyphicon glyph="eye-open"/> Track</Button>&nbsp;
                    <Button bsStyle="default"> $$$$</Button>
                  </p>
                </Thumbnail>
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );

};
const mapStateToProps = (state) => {
  return {
    'results': state.results
  };
};

export const UnwrappedSearch = Results;
export default connect(mapStateToProps)(Results);
