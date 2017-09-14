import * as constants from '../constants/tables';

export default (state = {}, action) => {
  switch (action.type) {
  case constants.CREATE_TABLE:
    return {
      ...state, 
      [action.text]: []
    };
  default:
    return state;
  }
};
