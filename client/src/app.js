import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import Index from './Index.jsx';
import Search from './components/Search.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Results from './components/Results.jsx';
import Profile from './components/Profile.jsx';
import Product from './components/Product.jsx';


const App = () => {
  return (
    <div className="price-point-app">
      <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/search' component={Search} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/results' component={Results} />
        <Route path='/profile' component={Profile} />
        <Route path='/product' component={Product} />
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
