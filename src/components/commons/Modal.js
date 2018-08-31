import React from 'react';
import  MealItems from '../Meal/MeaItems';
import PropTypes from 'prop-types';

const Modal = ({meals}) => {
  return (
    <div>

      <div className="modal fade index-high" id="modalCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>meal name</td>
                    <td>UGX 10000</td>
                    <td>
                      <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                      </label>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">1</th>
                    <td>meal name</td>
                    <td>UGX 10000</td>
                    <td>
                      <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                      </label>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">1</th>
                    <td>meal name</td>
                    <td>UGX 10000</td>
                    <td>
                      <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                      </label>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">1</th>
                    <td>meal name</td>
                    <td>UGX 10000</td>
                    <td>
                      <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                      </label>
                    </td>
                  </tr>

                </tbody>
              </table>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-primary" data-dismiss="modal">Cancel</button>
              <button className="btn btn-primary">Add To Menu</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

Modal.propTypes = {
  meals: PropTypes.object.isRequired,
};

export default Modal;
