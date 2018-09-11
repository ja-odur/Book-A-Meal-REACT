import React from 'react';
import EditMenu from '../Menu/EditMenu';
import AddMeal from '../Meal/AddMeal';
import Modal from '../commons/Modal';
import PendingOrders from '../Order/PendingOrders';
import PropTypes from 'prop-types';
import OrderHistoryCaterer from "../Order/OrderHistoryCaterer";

const ContentCaterer = ({tabs, mealData, meals, onChange, onSave, saving, mealAddStatus, errors, onClick, menu,
                          meal_ids, orders, orderHistory}) => {
  return(
    <div id="content">

      <div className="side-content">
        <PendingOrders
          orders={orders}
          onClick={onClick}
        />
      </div>

      <div className="middle-content">
        <EditMenu
          showMenu={tabs.edit_menu}
          menu={menu}
          onClick={onClick}

        />
        <AddMeal
          showMeal={tabs.add_meal}
          mealData={mealData}
          onChange={onChange}
          onSave={onSave}
          saving={saving}
          mealAddStatus={mealAddStatus}
          errors={errors}
        />
        <OrderHistoryCaterer
          showHistory={tabs.order_history}
          orderHistory={orderHistory}
          onClick={onClick}
        />
        <Modal
          meals={meals}
          meal_ids={meal_ids}
          onClick={onClick}
          onChange={onChange}
        />

      </div>
    </div>

  );
};

ContentCaterer.propTypes = {
  tabs: PropTypes.object.isRequired,
  mealData: PropTypes.object.isRequired,
  meals: PropTypes.array.isRequired,
  menu: PropTypes.array.isRequired,
  meal_ids: PropTypes.array.isRequired,
  orders: PropTypes.array.isRequired,
  saving: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  orderHistory: PropTypes.array.isRequired,
  errors: PropTypes.array,
  mealAddStatus: PropTypes.string,

};

export default ContentCaterer;
