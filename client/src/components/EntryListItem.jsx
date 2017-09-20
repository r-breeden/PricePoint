import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Table, Button, Glyphicon} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteTable, deleteItem } from '../store/actions/tables';
import { bindActionCreators } from 'redux';
import '../styles/main.scss';
import axios from 'axios';



const EntryListItem = (props) => {
  // var tableIndex = (name) => {
  //   for (var x = 0; x < state.tables.length; x += 1) {
  //     if ()
  //   }
  // }

  var onEntryListClick = () => {
    axios.post('./api/removeItem', {
      id: props.user,
      table: props.tableName,
      upc: props.listItem.upc})
      .then( (res) => {
        console.log('indexOfTable', props);
        console.log('indexOfItem', props.controlId );
      })
      .catch( (err) => {
        console.log(err);
      });
  };

  return (
    <td>
      <Button onClick={onEntryListClick}>remove product from list </Button>&nbsp;
      <Link to={`/product/${props.listItem.upc}`}>{props.listItem.name}</Link>
    </td>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteTable: deleteTable,
  deleteItem: deleteItem,
}, dispatch);

const mapStateToProps = state => {
  return {
    'user': state.user.id,
    'tables': state.tables
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EntryListItem);
