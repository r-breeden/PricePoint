import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Table, Button, Glyphicon} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/main.scss';
import axios from 'axios';

const EntryListItem = (props) => {
  var onEntryListClick = () => {
    console.log('hi hi hi hi hi');
    axios.post('./api/removeItem', props.user, props.TableName, props.listItem.upc)
      .then( (res) => {
        console.log('entrylist item UPC code: ' + props.listItem.upc + ' removed.');
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
}

const mapStateToProps = state => {
  return {
    'user': state.user.id
  };
};

export default connect(mapStateToProps)(EntryListItem);

