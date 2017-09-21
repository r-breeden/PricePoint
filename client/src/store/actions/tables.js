import * as constants from '../constants/tables';

export const createTable = (obj) => ({
  type: constants.CREATE_TABLE,
  payload: obj,
});

export const deleteTable = (obj) => ({
  type: constants.DELETE_TABLE,
  payload: obj,
});

export const deleteItem = (tableIndex, itemIndex) => ({
  type: constants.DELETE_ITEM,
  tableIndex,
  itemIndex, 
});

export const updateTable = (obj, index) => ({
  type: constants.UPDATE_TABLE,
  payload: obj,
  index: index,
});
