import React from 'react';
import TextInput from '../commons/TextInput';
import PropTypes from 'prop-types';

const AddMeal = ({showMeal, mealData, onChange, onSave, saving, mealAddStatus, errors}) => {
  return (
    <div className={showMeal ? "" : "hidden"} id="add_meal">
      <p className="caterer text-center" >ADD MEAL</p>
      <table className="table table-striped table-light caterer-menu">
        <tbody>
        {mealAddStatus && mealAddStatus.length > 0 &&
        <tr>
          <td colSpan="3" className=" not not-info">
            {mealAddStatus}
          </td>
        </tr>
        }

        {errors && errors.length > 0 &&
        <tr>
          <td colSpan="3" className=" not not-danger">
            {errors[0].addMealError}
          </td>
        </tr>
        }

        <tr>
          <td colSpan="3" className="text-left">
            <TextInput
              showBrandName={true}
              type="text"
              name="name"
              label="Name:"
              value={mealData.name}
              onChange={onChange()}
            />
          </td>
        </tr>

        <tr>
          <td className="text-right">
            <TextInput
              showBrandName={true}
              type="number"
              name="price"
              label="Price (UGX):"
              value={mealData.price}
              onChange={onChange()}
            />
          </td>
        </tr>


        <tr>
          <td colSpan="3">
            <input
              type="submit"
              disabled={saving.saving}
              value={saving.saving ? 'Adding Meal...' : 'Add Meal'}
              className="btn btn-primary full mt-3"
              onClick={onSave('addMeal')}
            />
          </td>
        </tr>


        </tbody>
      </table>
    </div>
  );
};

AddMeal.propTypes = {
  showMeal: PropTypes.bool.isRequired,
  mealData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.array,
  mealAddStatus: PropTypes.string,
  errors: PropTypes.array
};

export default AddMeal;
