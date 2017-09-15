import { connect } from 'react-redux';

export default (state = false, action) => {
  switch (action.type) {
  case 'TOGGLE_LOADING':
    return {
      ...state, 
      isLoading: !state.isLoading
    };
  default:
    return state;
  }
};

// const mapStateToProps = state => ({
//   isLoading: state.isLoading
// });

// export default connect(mapStateToProps)(loading);




