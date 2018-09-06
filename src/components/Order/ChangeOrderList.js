import React from 'react';
import PropTypes from 'prop-types';

const ChangeOrderList = ({orders, onClick}) => {
  console.log('orders', orders);
  var total = 0;
  var counter = 0;

  function sumTotal(price) {
    total += price;
    return price;
  }
  return (
    <tbody>
    {orders.map(order =>
      <tr>
        <td className="text-center">{++counter}</td>
        <td colSpan="2" className="text-center">{order.meal}</td>
        <td className="text-center">UGX {sumTotal(order.price)}</td>
        <td className="text-center">{order.caterer}</td>
        <td className="text-center" colSpan="2">
          <span className="btn btn-danger btn-sm" onClick={onClick('DeleteOrder', order.order_id)}>Remove</span>
        </td>
      </tr>
    )}

      <tr>
        <td colSpan="5">TOTAL</td>
        <td colSpan="2" className="text-right"><span className="btn btn-outline-primary">UGX {total}</span></td>
      </tr>
    </tbody>
  );
};

ChangeOrderList.propTypes = {
  orders: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ChangeOrderList;
