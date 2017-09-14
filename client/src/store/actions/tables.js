import * as constants from '../constants/tables';

export const createTable = (input) => ({
  type: constants.CREATE_TABLE,
  text: input,
});

export const deleteTable = () => ({
  type: constants.DELETE_TABLE,
});
