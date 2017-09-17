import React from 'react';
import ReactDOM from 'react-dom';
import { DropdownButton, MenuItem } from 'react-bootstrap';



const TimeSpan = (props) => {
  return (
    <DropdownButton title='History' id='time-period'
      onSelect={props.changeRange}
    >
      <MenuItem eventKey='1M'>30 Days</MenuItem>
      <MenuItem eventKey='3M'>3 Months</MenuItem>
      <MenuItem eventKey='6M'>6 Months</MenuItem>
      <MenuItem eventKey='1Y'>1 Year</MenuItem>
      <MenuItem eventKey='2Y'>2 Years</MenuItem>
    </DropdownButton>
  );
};

export default TimeSpan;
