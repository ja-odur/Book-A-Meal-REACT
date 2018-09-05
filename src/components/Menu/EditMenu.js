import React from 'react';
import MenuList from './MenuList';
import PropTypes from 'prop-types';

const EditMenu = ({showMenu, onClick, menu}) => {
  return (
    <div className={showMenu ? "" : "hidden"} id="edit_menu">
      <p className="caterer text-center">DAILY MENU</p>
      <table className="table table-striped table-light caterer-menu">
       <MenuList
        onClick={onClick}
        menu={menu}
       />
      </table>

    </div>
  );
};

EditMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  menu: PropTypes.array.isRequired,
};

export default EditMenu;
