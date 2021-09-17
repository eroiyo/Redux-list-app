import { useSelector, useDispatch } from 'react-redux';
import './Displayer.css';
import React from 'react';
import S from '../../imgs/s.svg';

function Displayer(props) {
  const { show } =props;
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

  if(show === undefined) {
  return (
    <div className="Displayer">
      <div className="display-b img filtered"><img src={S} /></div>
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
  return (
    <div className="Displayer">
      <div className="display-b img filtered"><img src={show.img} /></div>
      <div className="display-b text">
        <h1>{show.cat}</h1>
        <p>
          {show.total}
          {' '}
          Results
        </p>
      </div>
    </div>
  );
}

Displayer.displayName = 'Displayer';

Displayer.defaultProps = {
  total: '0',

};

export default Displayer;
