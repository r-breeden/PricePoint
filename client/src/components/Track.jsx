import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'react-bootstrap';
import { Thumbnail, Button, Glyphicon, Dropdown, DropdownButton, ButtonToolbar, MenuItem, RootCloseWrapper, CustomToggle, CustomMenu} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/main.scss';
import store from '../store';

const Track = (props) => {

  var userList = ['UserListItem1', 'UserListItem2', 'UserListItem3', 'UserListItem4'];

  //after db set with 
  const mapList = userList.map( (item, index) => { 
    return <MenuItem eventKey={index}>{item}</MenuItem>; 
  });

  return (
    <DropdownButton bsStyle="primary" title={<span><Glyphicon glyph="eye-open"/> Title</span>}>
      { mapList }
    </DropdownButton>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     'user': state.user.list
//   };
// };

//connect(mapStateToProps)(Track);

export default Track;