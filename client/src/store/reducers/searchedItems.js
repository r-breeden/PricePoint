
// searchAmazon: function (query) {
//   return { type: SEARCH_AMAZON, query, searching: true };
// },

export default (state = [], action) => {
  switch (action.type) {
  case 'SEARCH_AMAZON':
    console.log('Recieved Search amazon request in reducer');
    return Object.assign({}, state, {
      results: action.results,
      query: action.query,
      searching: false,
    });
  default:
    return state;
  }
};
