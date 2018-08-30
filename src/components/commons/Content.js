import React from 'react';
import Menu from '../Menu/Menu';
import ChangeOrder from '../Order/ChangeOrder';
import OrderHistory from '../Order/OrderHistory';
import Point from '../Point/Point';
import PropTypes from 'prop-types';

const Content = ({tabs}) => {

    return(
      <div id="content">

        <div className="side-content">
          <Point/>
        </div>

        <div className="middle-content">
          <Menu
            showMenu={tabs.menu}
          />
          <ChangeOrder
            showOrder={tabs.change_order}
          />
          <OrderHistory
            showHistory={tabs.order_history}
          />
        </div>
      </div>

    )
};

Content.propTypes = {
  tabs: PropTypes.object.isRequired,
}
;
export default Content;
