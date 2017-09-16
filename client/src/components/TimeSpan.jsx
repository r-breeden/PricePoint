import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Thumbnail, Table, Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';

const setDateRange = (range) => {
  var today = new Date;
  let currentMonth = today.getMonth();
  let currentYear = today.getYear();
  var modifiedDate = today;
  switch (range) {
  case '30 Days':
    modifiedDate = currentMonth > 0 ? today.setMonth(currentMonth - 1) : today.setFullYear(currentYear - 1, 11);
    break;
  default:
    modifiedDate = today;

  }
  return modifiedDate.toString().slice(0, 19);
};


const TimeSpan = (props) => {
  return (
    <DropdownButton title='History' id='time-period'
      onSelect={props.changeRange}
      onClick={props.changeRange}
    >
      <MenuItem eventKey='1'>30 Days</MenuItem>
      <MenuItem eventKey='2'>3 Months</MenuItem>
      <MenuItem eventKey='3'>6 Months</MenuItem>
      <MenuItem eventKey='4'>1 Year</MenuItem>
      <MenuItem eventKey='5'>2 Years</MenuItem>
    </DropdownButton>
  );
};

export default TimeSpan;
