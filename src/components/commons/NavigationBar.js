import React from 'react';

class NavigationBar extends React.Component {
  render(){
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark-nav">
          <a className="navbar-brand text-white text-lg-left">EasyMeal</a>
          <span className="text-white">Logged in as USERNAME SETTINGS</span>
          <form className="form-inline">
            <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success text-white border-white on-hover-white my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
      </div>
    )
  }
}

export default NavigationBar;
