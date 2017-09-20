import * as constants from '../constants/tables';

export const createTable = (obj) => ({
  type: constants.CREATE_TABLE,
  payload: obj,
});

export const deleteTable = () => ({
  type: constants.DELETE_TABLE,
});

export const updateTable = (obj, index) => ({
  type: constants.UPDATE_TABLE,
  payload: obj,
  index: index, 
});
