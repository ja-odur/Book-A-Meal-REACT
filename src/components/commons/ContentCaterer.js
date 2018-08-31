import React from 'react';
import EditMenu from '../Menu/EditMenu';
import AddMeal from '../Meal/AddMeal';
import PendingOrders from '../Order/PendingOrders';
import PropTypes from 'prop-types';

const ContentCaterer = ({tabs, mealData, onChange, onSave, saving, mealAddStatus, errors}) => {

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
          mealData={mealData}
          onChange={onChange}
          onSave={onSave}
          saving={saving}
          mealAddStatus={mealAddStatus}
          errors={errors}
        />
      </div>
    </div>

  );
};

ContentCaterer.propTypes = {
  tabs: PropTypes.object.isRequired,
  mealData: PropTypes.object.isRequired,
  saving: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  errors: PropTypes.array,
};

export default ContentCaterer;
