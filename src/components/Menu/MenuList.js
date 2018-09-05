import React from 'react';
import PropTypes from 'prop-types';

const MenuList = ({menu, onClick}) => {
  return (
    <tbody>
    { menu.map(menuItem =>
      <tr>
        <td colSpan="2" className="text-center" key={menuItem.menu_id}>{menuItem.name}</td>
        <td className="text-center"> UGX {menuItem.price}</td>
        <td className="text-center"><span className="btn btn-danger btn-sm">Remove</span></td>
      </tr>
    )}

    <tr>
      <td colSpan="4"><span className="btn btn-primary btn-block" data-toggle="modal" data-target="#modalCart" onClick={onClick("addMeal")}>Add Meal</span></td>
    </tr>

    </tbody>
  );
};

MenuList.propTypes = {
  onClick: PropTypes.func.isRequired,
  menu: PropTypes.array.isRequired,
};

export default MenuList;