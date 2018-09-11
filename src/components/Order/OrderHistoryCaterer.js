import React from 'react';
import PropTyes from 'prop-types';
import OrderHistoryCatererList from './OrderHistoryCatererList';

const OrderHistoryCaterer = ({showHistory, onClick, orderHistory}) => {
  return (
    <div className={showHistory ? "" : "hidden"} id="order_history">
      <div className="order_history">ORDER HISTORY</div>

      <table className="table table-striped table-light caterer-menu">
        <OrderHistoryCatererList
          orderHistory={orderHistory}
          onClick={onClick}
        />
      </table>

    </div>
  );
};

OrderHistoryCaterer.propTypes = {
  showHistory: PropTyes.bool.isRequired,
  orderHistory: PropTyes.array.isRequired,
  onClick: PropTyes.func.isRequired,
};

export default OrderHistoryCaterer;
