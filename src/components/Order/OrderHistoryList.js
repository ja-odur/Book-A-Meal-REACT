import React from 'react';
import PropTypes from 'prop-types';

const OrderHistoryList = ({orderHistory, onClick}) => {
  var counter = 0;
  return (
    <tbody>
      {orderHistory.map(order =>
      <tr>
        <td className="text-center">{++ counter}</td>
        <td colSpan="2" className="text-center">{order.meal}</td>
        <td className="text-center"> UGX {order.price}</td>
        <td className="text-center">{order.caterer}</td>
        <td className="text-left">Points {order.points}</td>
        <td className="text-center" >
          <span className="btn btn-primary btn-sm" onClick={onClick("PointMeal", order.meal_id)}>Point</span>
        </td>
      </tr>
      )}
      {orderHistory && orderHistory.length <= 0 &&
        <td colSpan="7" className="text-center">
          <span className="btn btn-outline-primary btn-block">No Order History Available</span>
        </td>
      }

    </tbody>
  );
};

OrderHistoryList.propTypes = {
  orderHistory: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default OrderHistoryList;
