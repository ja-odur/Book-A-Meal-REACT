import React from 'react';
import Menu from '../Menu/Menu';
import ChangeOrder from '../Order/ChangeOrder';
import OrderHistory from '../Order/OrderHistory';
import Point from '../Point/Point';
import PropTypes from 'prop-types';

const Content = ({tabs, menus, orders, orderHistory, onClick}) => {

    return(
      <div id="content">

        <div className="side-content">
          <Point/>
        </div>

        <div className="middle-content">
          <Menu
            showMenu={tabs.menu}
            menus={menus}
            onClick={onClick}
          />
          <ChangeOrder
            showOrder={tabs.change_order}
            orders={orders}
            onClick={onClick}
          />
          <OrderHistory
            showHistory={tabs.order_history}
            orderHistory={orderHistory}
            onClick={onClick}
          />
        </div>
      </div>

    );
};

Content.propTypes = {
  tabs: PropTypes.object.isRequired,
  menus: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  orders: PropTypes.array.isRequired,
  orderHistory: PropTypes.array.isRequired,
};

export default Content;
