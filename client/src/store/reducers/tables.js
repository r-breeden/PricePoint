import * as constants from '../constants/tables';

export default (state = [], action) => {
  switch (action.type) {
  case constants.CREATE_TABLE:
    return [...state, action.payload];
  case constants.UPDATE_TABLE:
    state[action.index].list.push(action.payload);
    return [...state];
  case constants.DELETE_TABLE:
    let newState = state.slice();
    newState.splice(action.tableIndex,1);
    return newState;
  case constants.DELETE_ITEM:
    // console.log('Table', action.tableIndex);
    // console.log('Item', action.itemIndex);
    var removeItem = (array, action) => {
      var newState = array.slice();
      newState[action.tableIndex] = { ...array[action.tableIndex] };

      var list = array[action.tableIndex].list.slice();
      list.splice(action.itemIndex, 1);
      newState[action.tableIndex].list = list;

      return newState;
    };
    return (removeItem(state, action));
  default:
    return state;
  }
};
