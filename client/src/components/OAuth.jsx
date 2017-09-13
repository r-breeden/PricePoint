import React from 'react';
import ReactDOM from 'react-dom';
import { PageHeader } from 'react-bootstrap';

const OAuth = () => {
  return (
    <div>
      <PageHeader></PageHeader>
      Or login with any of the following services:
      <br/>
      <a href="/auth/facebook">
        <img className="socialIcons" src="/assets/facebook.svg"/>
      </a>
      <a href="/auth/google">
        <img className="socialIcons" src="/assets/google.svg"/>
      </a>
    </div>
  );
};

export default OAuth;
