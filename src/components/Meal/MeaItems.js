import React from 'react';
import PropTypes from 'prop-types';

const MealItems = ({meals}) => {
  return (
    <tbody>
    {meals.map(meal =>
      <tr>
        <th scope="row" key={meal.id}>1</th>
        <td>{meal.name}</td>
        <td>{meal.price}</td>
        <td>
          <label className="switch">
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
  meals: PropTypes.object,
};

export default MealItems;
