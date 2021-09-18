import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Proptypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Separator from '../components/Separator/Separator';

const MockSeparator = ({ show }) => (
  <BrowserRouter>
    <Provider store={store}>
      <Separator show={{ show }} />
    </Provider>
  </BrowserRouter>
);

MockSeparator.propTypes = {
  show: Proptypes.shape(
    {
      cat: Proptypes.string,
      total: Proptypes.number,
      img: Proptypes.string,
    },
  ),
};

MockSeparator.defaultProps = {
  show: undefined,
};

describe('Test the Separator component', () => {
  beforeEach(() => {
    render(<MockSeparator show={{ cat: 'Jewelery' }} />);
  });

  it('should match the snapshot', () => {
    const tree = renderer.create(<MockSeparator year="2021" title="Most views" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
