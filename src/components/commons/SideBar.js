import React from 'react';
import PropTypes from 'prop-types';

const SideBar =({tabs, onClick}) => {
console.log('tabs sidebar', tabs);
  return (
     <div id="sidebar">
       <ul>
         <li className={tabs.menu ? "active" : ""} onClick={onClick('showMenu')}><a href="">Menu</a></li>
         <li className={tabs.change_order ? "active" : ""} onClick={onClick('showOrder')}><a href="">Change Order</a></li>
         <li className={tabs.order_history ? "active" : ""} onClick={onClick('showHistory')}><a href="">Order History</a></li>
         <li className={tabs.notifications ? "active" : ""} onClick={onClick('showNotification')}><a href="">Notifications</a></li>
         <li className="splitter"></li>
         <li><a href="#!" id="logout">LogOut</a></li>
       </ul>

     </div>
  );

};

SideBar.propTypes = {
  tabs: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SideBar;
