import * as constants from '../constants/tables';

export default (state = [], action) => {
  switch (action.type) {
  case constants.CREATE_TABLE:
    return [...state, action.payload];
  case constants.UPDATE_TABLE:
    state[action.index].list.push(action.payload);
    return [...state];
  case constants.DELETE_TABLE:
    return [...state];
  case constants.DELETE_ITEM:
    console.log(state);
    console.log(action.tableIndex);
    console.log(action.itemIndex);
  default:
    return state;
  }
};
