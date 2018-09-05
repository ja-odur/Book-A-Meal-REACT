import React from 'react';
import PropTypes from 'prop-types';

const EditMenu = ({showMenu, onClick}) => {
  return (
    <div className={showMenu ? "" : "hidden"} id="edit_menu">
      <p className="caterer text-center">DAILY MENU</p>
      <table className="table table-striped table-light caterer-menu">
        <tbody>
          <tr>
            <td colSpan="2" className="text-center">Beef with rice</td>
            <td className="text-center"> UGX 10,000</td>
            <td className="text-center"><span className="btn btn-danger btn-sm">Remove</span></td>
          </tr>

          <tr>
            <td colSpan="2" className="text-center">Beef with rice</td>
            <td className="text-center"> UGX 10,000</td>
            <td className="text-center"><span className="btn btn-danger btn-sm">Remove</span></td>
          </tr>

          <tr>
            <td colSpan="2" className="text-center">Beef with rice</td>
            <td className="text-center"> UGX 10,000</td>
            <td className="text-center"><span className="btn btn-danger btn-sm">Remove</span></td>
          </tr>

          <tr>
            <td colSpan="2" className="text-center">Beef with rice</td>
            <td className="text-center"> UGX 10,000</td>
            <td className="text-center"><span className="btn btn-danger btn-sm">Remove</span></td>
          </tr>

          <tr>
            <td colSpan="4"><span className="btn btn-primary btn-block" data-toggle="modal" data-target="#modalCart" onClick={onClick("addMeal")}>Add Meal</span></td>
          </tr>


        </tbody>
      </table>

    </div>
  );
};

EditMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default EditMenu;
