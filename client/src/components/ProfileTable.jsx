import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Table, Glyphicon} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/main.scss';
import axios from 'axios';

const ProfileTable = (props) => {

  var onClickRemoveList = () => {
    console.log('click');

    axios.post('/api/removeCategories', props.user, props.ListName)
      .then( (res) => {
        console.log(props.ListName + ' removed form user\'s list');
      })
      .catch( (err) => {
        console.log(err);
      });
  };

  return (
    <Row>
      <Table>
        <th>
          <button onClick={onClickRemoveList}>REMOVE TITLE</button>
          {props.listName}
        </th>
        <tbody>
          {props.list.map( (listItem, i) => {
            return ( 
              <tr key={i}>
                <td>
                  <Link to={`/product/${listItem.upc}`}>{listItem.name}</Link>
                </td>
              </tr>);
          })}
        </tbody>
      </Table>
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    'user': state.user.id
  };
};

export default ProfileTable;
