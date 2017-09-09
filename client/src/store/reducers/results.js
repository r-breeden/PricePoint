export default (state = [], action) => {
  switch (action.type) {
  case 'SEARCH_AMAZON':
    return action.results.data.results;
  default:
    return state;
  }
};
