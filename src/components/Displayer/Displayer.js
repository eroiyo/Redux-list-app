import { useSelector } from 'react-redux';
import './Displayer.css';
import React from 'react';
import Proptypes from 'prop-types';
import S from '../../imgs/s.svg';

function Displayer(props) {
  const { show } = props;
  const state = useSelector((state) => state);
  let total = 0;
  if (state.products !== undefined) {
    state.shop.forEach((category) => {
      const number = state.products.get(category);
      if (number !== undefined) { total += number.length; }
    });
  }

  if (show === undefined) {
    return (
      <div className="Displayer">
        <div className="display-b img filtered"><img alt="displayer" src={S} /></div>
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
      <div className="display-b img filtered"><img alt={`displayer-${show.cat}`} src={show.img} /></div>
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
  show: undefined,
};

Displayer.propTypes = {
  show: Proptypes.shape(
    {
      cat: Proptypes.string,
      total: Proptypes.number,
      img: Proptypes.string,
    },
  ),
};

export default Displayer;
