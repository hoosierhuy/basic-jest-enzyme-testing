import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    // simulate a 'slice' of the shape of the data from the api above.
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2'}]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('Can fetch a list of comments from api and display them', (done) => {
  const wrapper = mount(
    <Root>
      <App />
    </Root>
  );
  
  wrapper.find('.fetch-comments').simulate('click');
  
  // This isn't to simulate latency, need delay for moxios to do its job.
  moxios.wait(() => {
    wrapper.update();
    expect(wrapper.find('li').length).toEqual(2);
    done();
    
    wrapper.unmount();
  });
  
});
