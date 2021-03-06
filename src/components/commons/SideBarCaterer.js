import React from 'react';
import PropTypes from 'prop-types';

const SideBarCaterer =({tabs, onClick}) => {
  return (
    <div id="sidebar">
      <ul>
        <li className={tabs.edit_menu ? "active" : ""} onClick={onClick('showMenu')}><a href="">Edit Menu</a></li>
        <li className={tabs.add_meal ? "active" : ""} onClick={onClick('showMeal')}><a href="">Add Meal</a></li>
        <li className={tabs.order_history ? "active showOrderClick" : "showOrderClick"} onClick={onClick('showOrderHistory')}><a href="">Order History</a></li>
        <li className="splitter"></li>
        <li><a href="#!" id="logout">LogOut</a></li>
      </ul>

    </div>
  );

};

SideBarCaterer.propTypes = {
  tabs: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SideBarCaterer;
