import React from 'react';
import PropTypes from 'prop-types';

const MenusList = ({menus, onClick}) => {
  console.log('menus in list', menus);
  return (
    <div>
      { menus.map(menu =>

        <table className="table table-striped table-light caterer-menu rounded">
            <thead className="rounded">
              <tr className="rounded">
                <td colSpan="4" key={menu[0]} className="caterer text-center">
                  {menu[0]}
                </td>
              </tr>
            </thead>

            <tbody>
            {menu[1].map(menuItem =>
              <tr key={menuItem.menu_id}>
                <td colSpan="2" className="text-center">{menuItem.name}</td>
                <td className="text-center"> UGX {menuItem.price}</td>
                <td className="text-center">
                  <span className="btn btn-primary btn-sm" onClick={onClick("orderMeal", menuItem.menu_id)}>Order</span></td>
              </tr>
            )}
            </tbody>
          </table>
        )
      }
    </div>
  );
};

MenusList.propTypes = {
  menus: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MenusList;
