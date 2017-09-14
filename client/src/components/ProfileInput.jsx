import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'react-bootstrap';
import { Form, FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createTable } from '../store/actions/tables';
import { bindActionCreators } from 'redux';
import '../styles/main.scss';

const ProfileInput = ({ createTable }) => {
  let input;
  return (
    <Row>
      <Form
        onSubmit={e => {
          e.preventDefault();
          createTable(input.value);
          input.value = '';
        }}
      >
        <FormGroup
          controlId="formBasicText"
        >
          <FormControl
            type="text"
            placeholder="Create a New Category"
            inputRef={ ref => {
              input = ref;
            }}
          />
          <FormControl.Feedback />
        </FormGroup>
      </Form>
    </Row>
  );
};

const mapStateToProps = state => ({
  tables: state.tables
});
const mapDispatchToProps = dispatch => bindActionCreators({
  createTable: createTable,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ProfileInput);
