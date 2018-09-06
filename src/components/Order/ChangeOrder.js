import React from 'react';
import ChangeOrderList from './ChangeOrderList';
import PropTypes from 'prop-types';

const ChangeOrder = ({showOrder, orders, onClick}) => {
  return (
    <div className={showOrder ? "" : "hidden"} id="current_order">
      <div className="current_order">CURRENT ORDERS</div>

      <table className="table table-striped table-light caterer-menu">
        <ChangeOrderList
          orders={orders}
          onClick={onClick}
        />
      </table>

    </div>
  );
};

ChangeOrder.propTypes = {
  showOrder: PropTypes.bool.isRequired,
  orders: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ChangeOrder;
