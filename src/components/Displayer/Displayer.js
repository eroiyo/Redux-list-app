import { useSelector, useDispatch } from 'react-redux';
import './Displayer.css';
import React from 'react';
import M from '../../imgs/m.svg';
import Category from '../category/Category';

function Displayer() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let total = 0;

  if (state.products !== undefined) {
    state.shop.forEach((category) => {
      const number = state.products.get(category);
      if(number!== undefined)
      total += number.length;
    });
  }

  return (
    <div className="Displayer">
      <div className="display-b img filtered"><img src={M} /></div>
      <div className="display-b text">
        <h1>FakeShop</h1>
        <p>
          {total}
          {' '}
          Results
        </p>
      </div>
    </div>
  );
}

Displayer.displayName = 'Screen';

Displayer.defaultProps = {
  total: '0',

};

export default Displayer;
