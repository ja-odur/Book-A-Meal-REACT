import React from 'react';
import EditMenu from '../Menu/EditMenu';
import AddMeal from '../Meal/AddMeal';
import PendingOrders from '../Order/PendingOrders';
import PropTypes from 'prop-types';

const ContentCaterer = ({tabs}) => {

  return(
    <div id="content">

      <div className="side-content">
        <PendingOrders/>
      </div>

      <div className="middle-content">
        <EditMenu
          showMenu={tabs.edit_menu}
        />
        <AddMeal
          showMeal={tabs.add_meal}
        />
      </div>
    </div>

  )
};

ContentCaterer.propTypes = {
  tabs: PropTypes.object.isRequired,
}
;
export default ContentCaterer;
