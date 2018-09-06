import React from 'react';
import Menus from './MenusList';
import PropTypes from 'prop-types';

const Menu = ({showMenu, menus}) => {
  return (
    <div id="menu" className={showMenu ? "" : "hidden"}>
      <Menus
        menus={menus}
      />
    </div>
  );
};

Menu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  menus: PropTypes.object.isRequired,
};

export default Menu;
