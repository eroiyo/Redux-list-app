import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import App from '../App';

const ReactTestRenderer = require('react-test-renderer');

it('Take a snaphot, and compared it, to see if they are equal', () => {
  const home = ReactTestRenderer.create(<Provider store={store}><App /></Provider>).toJSON();
  expect(home).toMatchSnapshot();
});
