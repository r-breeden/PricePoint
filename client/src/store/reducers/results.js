import dummyData from '../../../../db/seeds/data/2017-09-04_amazon_data.json';

const initialState = dummyData;

export default (state = initialState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};
