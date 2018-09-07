import React from 'react';
import PendingOrderList from  './PendingOrderList';
import PropTypes from 'prop-types';

const PendingOrders = ({orders, onClick}) => {
  return (
    <div id="pending_orders">
      <p className="pending text-center">PENDING ORDERS</p>
      <table className="table table-striped table-light caterer-pending">
       <PendingOrderList
         orders={orders}
         onClick={onClick}
       />
      </table>

    </div>
  );
};

PendingOrders.propTypes = {
  orders: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default PendingOrders;
