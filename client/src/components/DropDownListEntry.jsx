import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {MenuItem} from 'react-bootstrap';
import { updateTable } from '../store/actions/tables';
import { bindActionCreators } from 'redux';
import axios from 'axios';

const DropDownListEntry = (props) => {

  var onClickHandler = () => {
    //add list entry for user to db
    axios.get(`/api/categories/${props.user}`, {params: {id: props.user, table: props.listItem.name, upc: props.upc}})
      .then( (response) => {
        props.updateTable(response.data[0], props.controlId);
        console.log('DropDownListEntry sent data to db');
      })
      .catch ( (error) => {
        console.log('DropDownListEntry react component failed to reach db.');
      });
  };

  return (
    <MenuItem eventKey={props.upc} onClick={onClickHandler}>{props.listName}</MenuItem>
  );
};
const mapDispatchToProps = dispatch => bindActionCreators({
  updateTable: updateTable,
}, dispatch);

const mapStateToProps = (state) => {
  return {
    'user': state.user.id,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDownListEntry);
