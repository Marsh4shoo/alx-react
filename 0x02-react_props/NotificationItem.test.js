import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

it('renders without crashing', () => {
  shallow(<NotificationItem />);
});

it('renders with type and value', () => {
  const wrapper = shallow(<NotificationItem type="default" value="test" />);
  expect(wrapper.find('[data-notification-type="default"]').text()).toBe('test');
});

it('renders with html', () => {
  const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
  expect(wrapper.html()).toContain('<u>test</u>');
});

