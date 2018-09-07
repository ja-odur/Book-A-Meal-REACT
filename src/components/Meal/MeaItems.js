import React from 'react';
import PropTypes from 'prop-types';

const MealItems = ({meals, onChange}) => {
  var counter = 1;

  return (
    <tbody>
    {meals.map(meal =>
      <tr key={`meal-${meal.meal_id}`}>
        <td className="text-center">{counter++}</td>
        <td className="text-center">{meal.name}</td>
        <td className="text-center">UGX {meal.price}</td>
        <td>
          <label className="switch text-center">
            <input type="checkbox" value={meal.meal_id} onChange={onChange('addMealToMenu')} />
            <span className="slider round"></span>
          </label>
        </td>
      </tr>
    )}
    {meals && meals.length <= 0 &&
      <tr>
        <td colSpan="4"><span className="btn btn-outline-primary btn-block">No Meals Created</span></td>
      </tr>
    }

    </tbody>
  );
};

MealItems.propTypes = {
  meals: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MealItems;
