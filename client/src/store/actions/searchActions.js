const axios = require('axios');
/*
 * action types
 */
const actions = {
  SEARCH_AMAZON: 'SEARCH_AMAZON',
  SEARCH_WALMART: 'SEARCH_WALMART',
  SEARCH_STORE3: 'SEARCH_STORE3',
  /*
 * action creators
 */
  queryAndResults: function (type, query, results) {
    return { type, query, results, searching: true };
  },
  searchAmazon: function(query) {
    return function (dispatch) {
      axios.get('api/search', {
        params: {q: query}
      })
        .then((response) => {
          dispatch(actions.queryAndResults('SEARCH_AMAZON', query, response));
          console.log(response);
        })
        .catch( error => console.log(error));
    };
  }

};
export default actions;
