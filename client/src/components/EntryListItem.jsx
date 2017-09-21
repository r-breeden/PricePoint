import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Table, Button, Glyphicon} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/main.scss';
import axios from 'axios';

const EntryListItem = (props) => {
  var onEntryListClick = () => {
    axios.post('./api/removeItem', props.user, props.tableName, props.listItem.upc)
      .then( (res) => {
        console.log('entrylist item UPC code: ' + props.listItem.upc + ' removed.');
      })
      .catch( (err) => {
        console.log(err);
      });
  };

  return (
    <td>
      <Link to={`/product/${props.listItem.upc}`}>{props.listItem.name}</Link> &nbsp;
      <Button className="btn-round btn-xs" onClick={onEntryListClick}><span className="glyphicon glyphicon-remove glyph-color glyphicon-center"></span></Button>
    </td>
  );
};

const mapStateToProps = state => {
  return {
    'user': state.user.id
  };
};

export default connect(mapStateToProps)(EntryListItem);

