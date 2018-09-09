import React from 'react';
import  MealItems from '../Meal/MeaItems';
import PropTypes from 'prop-types';

const Modal = ({meals, meal_ids, onChange, onClick}) => {
  return (
    <div>

      <div className="modal fade index-high" id="modalCart" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content ">

            <div className="modal-header text-center text-white bg-primary">
              <h4 className="modal-title" id="myModalLabel">ADD MEALS TO MENU</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span className="text-white" aria-hidden="true">×</span>
              </button>
            </div>

            <div className="modal-body">

              <table className="table table-hover">
                <MealItems
                  meals={meals}
                  onChange={onChange}
                  meal_ids={meal_ids}
                />
              </table>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-primary" data-dismiss="modal">Cancel</button>
              <button className="btn btn-primary addMealToMenu" data-dismiss="modal" onClick={onClick("addMealsToMenu")}>Add To Menu</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

Modal.propTypes = {
  meals: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  meal_ids: PropTypes.array.isRequired,
};

export default Modal;
