import './Displayer.css';
import React from 'react';
import M from '../../imgs/m.svg';
function Displayer() {
  return (
      <div className="Displayer">
          <div className="display-b img"><img src={M}></img></div>
          <div className="display-b text">
              <h1>Fake Shop</h1>
              <p>0 Results</p>
          </div>
      </div>
  );
}
export default Displayer;