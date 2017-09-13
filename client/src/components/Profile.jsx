import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from 'react-bootstrap';
import ProfileUser from './ProfileUser.jsx';
import ProfileInput from './ProfileInput.jsx';
import ProfileTable from './ProfileTable.jsx';
import '../styles/main.scss';

const Profile = () => {
  return (
    <Grid>
      <ProfileUser></ProfileUser>
      <ProfileInput></ProfileInput>
      <ProfileTable></ProfileTable>
    </Grid>
  );
};

export default Profile;
