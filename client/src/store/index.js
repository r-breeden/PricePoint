import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// If router gets implemented, create and export history here

// If preloaded state comes from the server, inject it here
const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
  // routerMiddleware goes here
];

// Hook up Redux DevTools

const devToolsExtension = windows.devToolsExtension;

if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  {}, // TODO: Add root reducer
  initialState,
  composedEnhancers
);

export default store;
