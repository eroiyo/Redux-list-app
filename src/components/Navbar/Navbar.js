import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import mic from '../../imgs/microphone.svg';
import next from '../../imgs/next.svg';
import settings from '../../imgs/settings.svg';

function Navbar(props) {
  const { setData } = props;

  const handleClick = () => {
    setData(undefined);
  };

  return (
    <nav className="navBar">
      <div className="header">
        <Link
          onKeyDown={handleClick}
          onClick={handleClick}
          key="home"
          to={`${process.env.PUBLIC_URL}/`}
          active="true"
        >
          <img alt="return" src={next} className="arrow-left" />
        </Link>
        <h6 className="header-title">FakeShop</h6>
        <img src={mic} alt="mic" className="mic" />
        <img src={settings} alt="settings" className="settings" />
      </div>
    </nav>
  );
}
Navbar.displayName = 'Navbar';

Navbar.defaultProps = {
  setData: undefined,
};

Navbar.propTypes = {
  setData: Proptypes.func,
};
export default Navbar;
