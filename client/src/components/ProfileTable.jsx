import React from 'react';
import ReactDOM from 'react-dom';
import { Row } from 'react-bootstrap';
import { Table, Button, Checkbox } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/main.scss';

const ProfileTable = (props) => {
  return (
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
                  <td><Link to={`/product/${el.upc}`}>{el.item}</Link></td>
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
  );
};

const mapStateToProps = (state) => {
  return {
    'user': state.user,
    'table': state.table,
  };
};

export const UnwrappedProfile = ProfileTable;
export default connect(mapStateToProps)(ProfileTable);
