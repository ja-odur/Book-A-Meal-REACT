import React from 'react';
import PropTypes from 'prop-types';

const Menu = (showMenu) => {

  return (
    <div id="menu" className={showMenu.showMenu ? "" : "hidden"}>
      <p className="caterer" id="caterer11"><span><img
        src="icons/plus.png" id="img1"/></span>Caterer 1</p>
      <table className="table table-striped table-light caterer-menu">
        <tbody>
          <tr>
            <td colSpan="2" className="text-center">Beef with rice</td>
            <td className="text-center"> UGX 10,000</td>
            <td className="text-center"><span className="btn btn-primary btn-sm">Order</span></td>
          </tr>

          <tr>
            <td colSpan="2" className="text-center">Beef with rice</td>
            <td className="text-center"> UGX 10,000</td>
            <td className="text-center"><span className="btn btn-primary btn-sm">Order</span></td>
          </tr>

          <tr>
            <td colSpan="2" className="text-center">Beef with rice</td>
            <td className="text-center"> UGX 10,000</td>
            <td className="text-center"><span className="btn btn-primary btn-sm">Order</span></td>
          </tr>

        </tbody>
      </table>

      <p className="caterer" id="caterer12"><span><img
        src="icons/plus.png" id="img1"/></span>Caterer 2</p>
      <table className="table table-striped table-light caterer-menu">
        <tbody>
        <tr>
          <td colSpan="2" className="text-center">Beef with rice</td>
          <td className="text-center"> UGX 10,000</td>
          <td className="text-center"><span className="btn btn-primary btn-sm">Order</span></td>
        </tr>

        <tr>
          <td colSpan="2" className="text-center">Beef with rice</td>
          <td className="text-center"> UGX 10,000</td>
          <td className="text-center"><span className="btn btn-primary btn-sm">Order</span></td>
        </tr>

        <tr>
          <td colSpan="2" className="text-center">Beef with rice</td>
          <td className="text-center"> UGX 10,000</td>
          <td className="text-center"><span className="btn btn-primary btn-sm">Order</span></td>
        </tr>

        </tbody>
      </table>

      <p className="caterer" id="caterer13"><span><img
        src="icons/plus.png" id="img1"/></span>Caterer 3</p>
      <table className="table table-striped table-light caterer-menu">
        <tbody>
        <tr>
          <td colSpan="2" className="text-center">Beef with rice</td>
          <td className="text-center"> UGX 10,000</td>
          <td className="text-center"><span className="btn btn-primary btn-sm">Order</span></td>
        </tr>

        <tr>
          <td colSpan="2" className="text-center">Beef with rice</td>
          <td className="text-center"> UGX 10,000</td>
          <td className="text-center"><span className="btn btn-primary btn-sm">Order</span></td>
        </tr>

        <tr>
          <td colSpan="2" className="text-center">Beef with rice</td>
          <td className="text-center"> UGX 10,000</td>
          <td className="text-center"><span className="btn btn-primary btn-sm">Order</span></td>
        </tr>

        </tbody>
      </table>

      <p className="caterer" id="caterer14"><span><img
        src="icons/plus.png" id="img1"/></span>Caterer 4</p>
      <table className="table table-striped table-light caterer-menu">
        <tbody>
        <tr>
          <td colSpan="2" className="text-center">Beef with rice</td>
          <td className="text-center"> UGX 10,000</td>
          <td className="text-center"><span className="btn btn-primary btn-sm">Order</span></td>
        </tr>

        <tr>
          <td colSpan="2" className="text-center">Beef with rice</td>
          <td className="text-center"> UGX 10,000</td>
          <td className="text-center"><span className="btn btn-primary btn-sm">Order</span></td>
        </tr>

        <tr>
          <td colSpan="2" className="text-center">Beef with rice</td>
          <td className="text-center"> UGX 10,000</td>
          <td className="text-center"><span className="btn btn-primary btn-sm">Order</span></td>
        </tr>

        </tbody>
      </table>
    </div>
  );
};

Menu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
};

export default Menu;
