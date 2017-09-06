import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import currentUser from './currentUser';
import newSearchedItems from './newSearchedItems';

export default combineReducers({
  router: routerReducer,
  currentUser,
  newSearchedItems
});
