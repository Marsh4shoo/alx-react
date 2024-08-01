import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('renders without crashing', () => {
  shallow(<Header />);
});

it('renders h1 tag', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('h1').length).toBe(1);
});

