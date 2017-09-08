import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Navbar, Button, Glyphicon } from 'react-bootstrap';
import Search from './components/Search.jsx';
import Results from './components/Results.jsx';

import Profile from './components/Profile.jsx'; 

const Index = () => {
  return (
    <Grid>
      <Profile></Profile>
    </Grid>
  );
};

export default Index;
