import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Index from './Index.jsx'; 
import Search from './components/Search.jsx'; 
import Login from './components/Login.jsx'; 
import Signup from './components/Signup.jsx'; 
import Results from './components/Results.jsx';


const App = () => {
  return (
    <div className="price-point-app">
      <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/search' component={Search} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/results' component={Results} />
        
      </Switch>
    </div>
  ); 
}; 

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


