import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Login from '../../src/components/Login';

describe('<Login />', () => {
  it('renders', () => {
    const wrapper = shallow(<Login />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
