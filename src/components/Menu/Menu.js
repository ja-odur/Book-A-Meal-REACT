import React from 'react';
import MenuLists from './MenusList';
import PropTypes from 'prop-types';

const Menu = ({showMenu, menus, onClick}) => {
  return (
    <div id="menu" className={showMenu ? "" : "hidden"}>
      <MenuLists
        menus={menus}
        onClick={onClick}
      />
    </div>
  );
};

Menu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  menus: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Menu;
