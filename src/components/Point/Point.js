import React from 'react';
import PropTypes from 'prop-types';
import PointList from './PointList';

const Point = ({trendingMeals, onClick}) => {
  return (
    <div className="" id="Point">
      <div className="pending text-center">TRENDING</div>

      <table className="table table-striped table-light caterer-pending">
        <thead>
        <tr>
          <td className="text-center">Meal</td>
          <td className="text-center">Caterer</td>
          <td className="text-center">Points</td>
          <td></td>
        </tr>

        </thead>

        <PointList
          trendingMeals={trendingMeals}
          onClick={onClick}
        />

      </table>

    </div>
  );
};

Point.propTypes = {
  trendingMeals: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Point;
