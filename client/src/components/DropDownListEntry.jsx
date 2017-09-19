import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {MenuItem} from 'react-bootstrap';
import axios from 'axios';

const DropDownListEntry = (props) => {

  var onClickHandler = () => {
    //add list entry for user to db
    axios.get(`/api/categories/${props.user}`, {params: {id: props.user, table: props.listItem.name, upc: props.upc}})
      .then( (response) => {
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

const mapStateToProps = (state) => {
  return {
    'user': state.user.id,
  };
};

export default connect(mapStateToProps)(DropDownListEntry);
