import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './currentUser';
// import searchedItems from './searchedItems';
import results from './results';

export default combineReducers({
  router: routerReducer,
  user,
  // searchedItems,
  results

});
