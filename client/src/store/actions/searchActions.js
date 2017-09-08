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
  searchAmazon: function (query) {
    return { type: SEARCH_AMAZON, query, searching: true };
  },
  searchWalmart: function (query) {
    return { type: SEARCH_WALMART, query, searching: true };
  },
  searchStore: function (query) {
    return { type: SEARCH_STORE3, query, searching: true };
  }
};
export default actions;
