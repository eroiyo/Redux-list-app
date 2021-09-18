import './Separator.css';
import React from 'react';
import Proptypes from 'prop-types';

function Separator(props) {
  const { show } = props;
  if (show === undefined) {
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

Separator.displayName = 'Displayer';

Separator.defaultProps = {
  show: undefined,
};

Separator.propTypes = {
  show: Proptypes.shape(
    {
      cat: Proptypes.string,
      total: Proptypes.number,
      img: Proptypes.string,
    },
  ),
};
export default Separator;
