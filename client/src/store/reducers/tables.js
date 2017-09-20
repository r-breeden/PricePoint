import * as constants from '../constants/tables';

export default (state = [], action) => {
  switch (action.type) {
  case constants.CREATE_TABLE:
    return [...state, action.payload];
  case constants.UPDATE_TABLE:
    console.log(state);
    console.log('index', action.index);
    console.log('payload', action.payload);
    state[action.index].list.push(action.payload);
    return [
      ...state
    ];
  default:
    return state;
  }
};
