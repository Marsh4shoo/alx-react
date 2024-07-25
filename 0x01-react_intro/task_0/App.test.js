import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  test('renders without crashing', () => {
    shallow(<App />);
  });

  test('renders App-header div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header').exists()).toBe(true);
  });

  test('renders App-body div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body').exists()).toBe(true);
  });

  test('renders App-footer div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer').exists()).toBe(true);
  });
});

