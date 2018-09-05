import React from 'react';
import PropTypes from 'prop-types';

const MealItems = ({meals}) => {
  console.log('meals in mealItem', meals);
  var counter = 1;

  return (
    <tbody>
    {meals.map(meal =>
      <tr key={meal.id}>
        <td className="text-center">{counter++}</td>
        <td className="text-center">{meal.name}</td>
        <td className="text-center">UGX {meal.price}</td>
        <td>
          <label className="switch text-center">
            <input type="checkbox"/>
            <span className="slider round"></span>
          </label>
        </td>
      </tr>
    )}

    </tbody>
  );
};

MealItems.propTypes = {
  meals: PropTypes.array.isRequired,
};

export default MealItems;
