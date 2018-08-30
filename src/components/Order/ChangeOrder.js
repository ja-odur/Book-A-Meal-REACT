import React from 'react';
import PropTypes from 'prop-types';

const ChangeOrder = ({showOrder}) => {
  return (
    <div className={showOrder ? "" : "hidden"} id="current_order">
      <div className="current_order">CURRENT ORDERS</div>

      <table className="table table-striped table-light caterer-menu">
        <tbody>
        <tr>
          <td colSpan="2" className="text-center">Beef with rice</td>
          <td className="text-center"> UGX 10,000</td>
          <td className="text-center"> Caterer 1</td>
          <td className="text-center"><span className="btn btn-primary btn-sm">Edit</span></td>
          <td className="text-center"><span className="btn btn-danger btn-sm">Remove</span></td>
        </tr>

        <tr>
          <td colSpan="2" className="text-center">Beef with rice</td>
          <td className="text-center"> UGX 10,000</td>
          <td className="text-center"> Caterer 1</td>
          <td className="text-center"><span className="btn btn-primary btn-sm">Edit</span></td>
          <td className="text-center"><span className="btn btn-danger btn-sm">Remove</span></td>
        </tr>

        <tr>
          <td colSpan="2" className="text-center">Beef with rice</td>
          <td className="text-center"> UGX 10,000</td>
          <td className="text-center"> Caterer 1</td>
          <td className="text-center"><span className="btn btn-primary btn-sm">Edit</span></td>
          <td className="text-center"><span className="btn btn-danger btn-sm">Remove</span></td>
        </tr>

        <tr>
          <td colSpan="2" className="text-center">Beef with rice</td>
          <td className="text-center"> UGX 10,000</td>
          <td className="text-center"> Caterer 1</td>
          <td className="text-center"><span className="btn btn-primary btn-sm">Edit</span></td>
          <td className="text-center"><span className="btn btn-danger btn-sm">Remove</span></td>
        </tr>

        <tr>
          <td colSpan="4">TOTAL</td>
          <td colSpan="2"> UGX 30,000</td>
        </tr>

        </tbody>
      </table>

    </div>
  );
};

ChangeOrder.propTypes = {
  showOrder: PropTypes.bool.isRequired,
};

export default ChangeOrder;
