import React from 'react';
import PropTypes from 'prop-types';

const MenuList = ({menu, onClick}) => {
  console.log('menu in menulist', menu);
  return (
    <tbody>
    { menu.map(menuItem =>
      <tr>
        <td colSpan="2" className="text-center" key={`menu-${menuItem.menu_id}`}>{menuItem.name}</td>
        <td className="text-center"> UGX {menuItem.price}</td>
        <td className="text-center"><span className="btn btn-danger btn-sm" value={menuItem.meal_id} onClick={onClick('removeMealFromMenu', menuItem.meal_id)}>Remove</span></td>
      </tr>
    )}

    {menu && menu.length <= 0 &&
    <tr>
      <td colSpan="4"><span className="btn btn-outline-primary btn-block">No Meals Added To Menu.</span></td>
    </tr>
    }

    <tr>
      <td colSpan="4">
        <span className="btn btn-primary btn-block" data-toggle="modal" data-target="#modalCart" onClick={onClick("addMeal")}>
          Add Meals
        </span>
      </td>
    </tr>

    </tbody>
  );
};

MenuList.propTypes = {
  onClick: PropTypes.func.isRequired,
  menu: PropTypes.array.isRequired,
};

export default MenuList;
