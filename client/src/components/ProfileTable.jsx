import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Table, Glyphicon, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteTable, deleteItem } from '../store/actions/tables';
import EntryListItem from './EntryListItem.jsx';
import { bindActionCreators } from 'redux';
import '../styles/main.scss';
import axios from 'axios';

const ProfileTable = (props) => {

  console.log('PROFILE TABLE RENDER');

  var onClickRemoveList = () => {
    console.log('click');

    axios.post('/api/removeCategories', {id: props.user, table: props.listName})
      .then( (res) => {
        props.deleteTable(props.listId);
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
          <span key={props.listId}>{props.listName}</span> &nbsp;
          <Button className="btn-round btn-xs" onClick={onClickRemoveList}><span className="glyphicon glyphicon-remove glyph-color glyphicon-center"></span></Button>
        </th>
        <tbody>
          {props.list.map( (listItem, i) => {
            return (
              <tr key={i}>
                <EntryListItem
                  controlId={i}
                  listItem={listItem}
                  tableName={props.listName}
                  listId={props.listId}
                />
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

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteTable: deleteTable,
  deleteItem: deleteItem,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileTable);
