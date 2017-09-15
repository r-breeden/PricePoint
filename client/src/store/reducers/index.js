import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import currentUser from './currentUser';
import results from './results';
import tables from './tables';
import loading from './loading';  

export default combineReducers({
  router: routerReducer,
  user: currentUser,
  results,
  tables,
  loading
});
