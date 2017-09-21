import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'react-bootstrap';
import { Thumbnail, Button, Glyphicon, Dropdown, DropdownButton, ButtonToolbar, MenuItem, RootCloseWrapper, CustomToggle, CustomMenu} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/main.scss';
import store from '../store';
import DropDownListEntry from './DropDownListEntry.jsx';

const Track = (props) => {

  return (
    <DropdownButton id="dropDownMenu" bsStyle="primary" title={<span><Glyphicon glyph="eye-open"/> Track</span>}>
      {props.tables.map( (item, i) => {
        return <DropDownListEntry controlId={i} key={i} upc={props.upc} listName={item.name} listItem={item} />;
      })}
    </DropdownButton>
  );
};

const mapStateToProps = (state) => {
  return {
    'user': state.user.list,
    'tables': state.tables
  };
};

export default connect(mapStateToProps)(Track);
