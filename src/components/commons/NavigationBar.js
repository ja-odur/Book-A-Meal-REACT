import React from 'react';
import PropTypes from 'prop-types';

const NavigationBar =({username}) => {
  console.log('username', username);
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark-nav">
          <a className="navbar-brand text-white text-lg-left">EasyMeal</a>
          <span className="text-white">Logged in as {username}.</span>
          <form className="form-inline">
            <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success text-white border-white on-hover-white my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
      </div>
    );

};

NavigationBar.propTypes = {
  username: PropTypes.string.isRequired,
};

export default NavigationBar;
