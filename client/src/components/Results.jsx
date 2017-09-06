import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Thumbnail, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/main.scss';

const Search = (props) => {
  console.log(props.results[0].title);

  return (
    <div>
      <Row>
        {props.results.map((el, i) => {
          return (
            <Col xs={12} md={6} lg={4}>
              <Thumbnail src={`${el.imageURL}`} alt="242x200">
                <Link to='/product'>
                  <h3>{el.title}</h3>
                </Link>
                <p>{el.description}</p>
                <p>
                  <Button bsStyle="primary">Track</Button>&nbsp;
                  <Button bsStyle="default">Favorite</Button>
                </p>
              </Thumbnail>
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

export const UnwrappedSearch = Search;
export default connect(mapStateToProps)(Search);
