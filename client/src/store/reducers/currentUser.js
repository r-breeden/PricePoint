const initialState = {
  username: 'poop@poop.com',
  userphoto: 'https://image.flaticon.com/icons/svg/284/284831.svg',
  followed: [{
    item: 'apple',
    lowestprice: '$0.40',
    track: false
  },
  {
    item: 'ham',
    lowestprice: '$998.00',
    track: false
  },
  {
    item: 'La Chouffe 750ml',
    lowestprice: '$12.99',
    track: false
  }]
};

export default (state = initialState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};
