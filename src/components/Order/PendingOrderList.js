import React from 'react';
import PropTypes from 'prop-types';

const PendingOrderList = ({orders, onClick}) => {
  var counter = 0;
  var total = 0;

  function sumTotal(price){
    total +=price;
    return price;
  }

  return (
    <tbody>
    {orders.map(order =>
    <tr key={`order-${order.order_id}`}>
      <td className="text-center">{++counter}</td>
      <td colSpan="2" className="text-center">{order.meal}</td>
      <td className="text-center"> UGX {sumTotal(order.price)}</td>
      <td className="text-center">{order.customer}</td>
      <td className="text-center">
        <span className="btn btn-primary btn-sm" onClick={onClick("clearOrder", order.order_id)}>Clear Order</span>
      </td>
    </tr>
    )}
    {orders && orders.length <= 0 &&
        <td colSpan="6">
          <span className="btn btn-outline-primary btn-block">No Orders Available</span>
        </td>
    }
    <tr>
      <td colSpan="5">TOTAL</td>
      <td><span className="btn btn-outline-primary btn-block">UGX {total}</span></td>
    </tr>

    </tbody>
  );
};

PendingOrderList.propTypes = {
  orders: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PendingOrderList;
