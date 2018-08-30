import React from 'react';

const PendingOrders = () => {
  return (
    <div id="pending_orders">
      <p className="caterer text-center">PENDING ORDERS</p>
      <table className="table table-striped table-light caterer-menu">
        <tbody>
        <tr>
          <td colSpan="2" className="text-center">Beef with rice</td>
          <td className="text-center"> Customer 1</td>
          <td className="text-center"><span className="btn btn-primary btn-sm">Clear Order</span></td>
        </tr>

        <tr>
          <td colSpan="2" className="text-center">Beef with rice</td>
          <td className="text-center"> Customer 2</td>
          <td className="text-center"><span className="btn btn-primary btn-sm">Clear Order</span></td>

        </tr>

        <tr>
          <td colSpan="2" className="text-center">Beef with rice</td>
          <td className="text-center"> Customer 3</td>
          <td className="text-center"><span className="btn btn-primary btn-sm">Clear Order</span></td>

        </tr>

        <tr>
          <td colSpan="2" className="text-center">Beef with rice</td>
          <td className="text-center"> Customer 4</td>
          <td className="text-center"><span className="btn btn-primary btn-sm">Clear Order</span></td>

        </tr>

        </tbody>
      </table>

    </div>
  )
};

export default PendingOrders;
