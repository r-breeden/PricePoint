import store from '../';
// searchAmazon: function (query) {
//   return { type: SEARCH_AMAZON, query, searching: true };
// },

export default (state = [], action) => {
  switch (action.type) {
  case 'SEARCH_AMAZON':
    // store.dispatch({type:'POST_RESULTS', results: action.results.data.results})
    console.log('Recieved Search amazon request in reducer', action.results.data.results);
    return Object.assign({}, state, {
      results: action.results.data.results,
      query: action.query,
      searching: false,
    });
  default:
    return state;
  }
};
