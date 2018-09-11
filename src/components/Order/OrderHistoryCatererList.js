import React from 'react';
import PropTypes from 'prop-types';

const OrderHistoryCatererList = ({orderHistory, onClick}) => {
  var counter = 0;
  var amount = 0;

  function sumAmount(price){
    amount += parseInt(price, 10);
    return price;
  }

  return (
    <tbody>
    {orderHistory.map(order =>
      <tr>
        <td className="text-center">{++ counter}</td>
        <td colSpan="2" className="text-center">{order.meal}</td>
        <td className="text-center"> UGX {sumAmount(order.price)}</td>
        <td colSpan="2" className="text-center">{order.caterer}</td>
      </tr>
    )}
    {orderHistory && orderHistory.length <= 0 &&
    <td colSpan="6" className="text-center">
      <span className="btn btn-outline-primary btn-block">No Order History Available</span>
    </td>
    }
    <tr>
      <td colSpan="2" className="text-center">CLEARED</td>
      <td className="text-center">
        <span className="btn btn-outline-primary btn-block">{counter}</span>
      </td>
      <td colSpan="2" className="text-center">TOTAL</td>
    <td className="text-center">
      <span className="btn btn-outline-primary btn-block">UGX{amount}</span>
    </td>
    </tr>

    </tbody>
  );
};

OrderHistoryCatererList.propTypes = {
  orderHistory: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default OrderHistoryCatererList;
