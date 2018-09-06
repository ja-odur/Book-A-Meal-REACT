import React from 'react';
import PropTyes from 'prop-types';
import OrderHistoryList from './OrderHistoryList';

const OrderHistory = ({showHistory, onClick, orderHistory}) => {
  return (
    <div className={showHistory ? "" : "hidden"} id="order_history">
      <div className="order_history">ORDER HISTORY</div>

      <table className="table table-striped table-light caterer-menu">
        <OrderHistoryList
          orderHistory={orderHistory}
          onClick={onClick}
        />
      </table>

    </div>
  );
};

OrderHistory.propTypes = {
  showHistory: PropTyes.bool.isRequired,
  orderHistory: PropTyes.array.isRequired,
  onClick: PropTyes.func.isRequired,
};

export default OrderHistory;
