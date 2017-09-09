export default (state = [], action) => {
  switch (action.type) {
  case 'SEARCH_AMAZON':
    return Object.assign({}, state, {
      results: action.results.data.results,
      query: action.query,
      searching: false,
    });
  default:
    return state;
  }
};
