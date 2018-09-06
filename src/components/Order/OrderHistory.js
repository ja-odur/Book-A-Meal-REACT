import React from 'react';
import PropTyes from 'prop-types';

const OrderHistory = ({showHistory}) => {
  return (
    <div className={showHistory ? "" : "hidden"} id="order_history">
      <div className="order_history">ORDER HISTORY</div>

      <table className="table table-striped table-light caterer-menu">
        <tbody>
        <tr>
          <td colSpan="2" className="text-center">Beef with rice</td>
          <td className="text-center"> Caterer 1</td>
          <td className="text-center" ><span className="btn btn-primary btn-sm">Point</span></td>
        </tr>

        <tr>
          <td colSpan="2" className="text-center">Beef with rice</td>
          <td className="text-center"> Caterer 1</td>
          <td className="text-center" ><span className="btn btn-primary btn-sm">Point</span></td>
        </tr>

        <tr>
          <td colSpan="2" className="text-center">Beef with rice</td>
          <td className="text-center"> Caterer 1</td>
          <td className="text-center" ><span className="btn btn-primary btn-sm">Point</span></td>
        </tr>

        <tr>
          <td colSpan="2" className="text-center">Beef with rice</td>
          <td className="text-center"> Caterer 1</td>
          <td className="text-center" ><span className="btn btn-primary btn-sm">Point</span></td>
        </tr>

        </tbody>
      </table>

    </div>
  );
};

OrderHistory.propTypes = {
  showHistory: PropTyes.bool.isRequired,
};

export default OrderHistory;
