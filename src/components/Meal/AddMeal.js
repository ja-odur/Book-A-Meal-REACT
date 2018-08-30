import React from 'react';
import PropTypes from 'prop-types';

const AddMeal = ({showMeal}) => {
  return (
    <div className={showMeal ? "" : "hidden"} id="add_meal">
      <p className="caterer text-center" >ADD MEAL</p>
      <table className="table table-striped table-light caterer-menu">
        <tbody>
        <tr>
          <td colSpan="2" className="text-right">Name:</td>
          <td className="text-left">
            <input type="text" className="form-control"/>
          </td>
        </tr>

        <tr>
          <td colSpan="2" className="text-right">Price:</td>
          <td className="text-left">
            <input type="number" className="form-control"/>
          </td>
        </tr>


        <tr>
          <td colSpan="3"><span className="btn btn-primary btn-block">Add Meal</span></td>
        </tr>


        </tbody>
      </table>
    </div>
  )
};

AddMeal.propTypes = {
  showMeal: PropTypes.bool.isRequired,
};

export default AddMeal;
