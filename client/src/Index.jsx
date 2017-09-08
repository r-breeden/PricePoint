import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { Navbar, Button, Glyphicon } from 'react-bootstrap';
import Search from './components/Search.jsx';
import Results from './components/Results.jsx';
import Login from './components/Login.jsx';
import Header from './components/Header.jsx';
import Profile from './components/Profile.jsx';

const Index = () => {
  return (
    <Grid>
      <Search></Search>
      <Results></Results>
    </Grid>
  );
};

export default Index;
