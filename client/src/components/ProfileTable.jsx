import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Table, Glyphicon, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import EntryListItem from './EntryListItem.jsx';
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
          <Button onClick={onClickRemoveList}>REMOVE LIST</Button>&nbsp;
          {props.listName}
        </th>
        <tbody>
          {props.list.map( (listItem, i) => {
            return ( 
              <tr key={i}>
                <EntryListItem listItem={listItem} tableName={props.listName}/>
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

export default connect(mapStateToProps)(ProfileTable);
