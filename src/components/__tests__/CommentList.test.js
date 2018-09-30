import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentList from 'components/CommentList';

let wrapper;

beforeEach(() => {
  const initialState = {
    comments: ['Comments 1', 'Comments 2']
  };
  
  wrapper = mount(
    <Root initialState={ initialState }>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it('creates one <li> per comment', () => {
  expect(wrapper.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
  expect(wrapper.render().text()).toContain('Comments 1');
  expect(wrapper.render().text()).toContain('Comments 2');
});