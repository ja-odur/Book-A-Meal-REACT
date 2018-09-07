import React from 'react';
import PropTypes from 'prop-types';

const PointList = ({trendingMeals, onClick}) => {
  console.log('trendingMeals', trendingMeals)
;  return (
    <tbody>
    {trendingMeals.map(meal =>
    <tr key={`trendingMeal-${meal.meal_id}`}>
      <td className="text-center">{meal.name}</td>
      <td className="text-center">{meal.brand_name}</td>
      <td className="text-center" >{meal.point}</td>
      <td className="text-center" >
        <span className="btn btn-primary btn-sm" onClick={onClick("orderMeal", meal.menu_id)}>Order</span>
      </td>
    </tr>
    )}
    {trendingMeals && trendingMeals.length <= 0 &&
    <tr>
      <td colSpan="4" className="text-center">
        <span className="btn btn-outline-primary btn-block">NO MEALS AVAILABLE</span>
      </td>
    </tr>
    }
    </tbody>
  );
};

PointList.propTypes = {
  trendingMeals: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PointList;
