import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {MenuItem} from 'react-bootstrap';
import axios from 'axios';

const DropDownListEntry = (props) => {
  var onClickHandler = () => {
    //user id, upc, list name
    //send list item to db
    /// categories/:name
    console.log('id: ', props.user);
    console.log('upc: ', props.upc);
    console.log('list name: ', props.listItem)
    axios.get('categories/:name', props.user, props.listItem, props.upc)
      .then( (response) => {
        console.log('DropDownListEntry sent data to db');
      })  
      .catch ( (error) => {
        console.log('DropDownListEntry react component failed to reach db.')
      })
  }

  return(
    <MenuItem eventKey={props.item} onClick={onClickHandler}>{props.listItem}</MenuItem>
  );
}

const mapStateToProps = (state) => {
  return {
    'user': state.user.id
  };
};

export default connect(mapStateToProps)(DropDownListEntry);

