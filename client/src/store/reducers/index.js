import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// get routerReducer

import currentUser from './currentUser';

export default combineReducers({
  routerReducer,
  currentUser,
});
