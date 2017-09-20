import React from 'react';
import ReactDOM from 'react-dom';
import { Row } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/main.scss';

const ProfileTable = (props) => {
  return (
    <Row>
      <Table>
        <th>
          {props.listName}
        </th>
        <tbody>
          {props.list.map( (listItem, i) => {
            return ( 
              <tr key={i}>
                <td>
                 <Link to={`/product/${listItem.upc}`}>{listItem.name}</Link>
                </td>
              </tr>)
          })}
        </tbody>
      </Table>
    </Row>
  );
};

export default ProfileTable;
