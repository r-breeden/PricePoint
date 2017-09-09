export default (state = [], action) => {
  switch (action.type) {
  case 'SEARCH_AMAZON':
    console.log(state);
    console.log('Recieved Search amazon request in reducer', action.results.data.results);
    return action.results.data.results;
  default:
    return state;
  }
};
