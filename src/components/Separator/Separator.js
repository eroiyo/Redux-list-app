import './Separator.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Separator(props) {
  const { show } = props;
  if (show == undefined) {
    return (
      <div className="Separator">
        <div className="inside">
          <h6 className="header-title separator-title">Categorys</h6>
        </div>
      </div>
    );
  }
  return (
    <div className="Separator">
      <div className="inside">
        <h6 className="header-title separator-title">{show.cat}</h6>
      </div>
    </div>
  );
}
export default Separator;
