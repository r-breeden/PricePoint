import reducer from '../../../src/store/reducers/currentUser';

describe('currentUser reducer', () => {
  it('should have an inital state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });
});