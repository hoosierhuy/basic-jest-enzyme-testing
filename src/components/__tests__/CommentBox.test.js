import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it('Has a text area and 2 buttons', () => {
  expect(wrapper.find('textarea').length).toEqual(1);
  expect(wrapper.find('button').length).toEqual(2);
});

describe('The text area', () => {
  
  beforeEach(() => {
    wrapper.find('textarea').simulate('change', {
      target: {value: 'new comment'}
    });
    wrapper.update();
  });
  
  it('Has a text area that users can type in', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
  });
  
  it('should clear out the textarea when form is submitted', () => {
    wrapper.find('textarea').simulate('change', {
      target: {value: 'new comment'}
    });
    wrapper.update();
    // find the element by string name and pass event to simulate method
    wrapper.find('form').simulate('submit');
    wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toEqual('');
  });
  
});