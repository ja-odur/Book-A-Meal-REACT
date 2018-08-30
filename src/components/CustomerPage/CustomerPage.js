import React from 'react';
import NavigationBar from '../commons/NavigationBar';
import Footer from '../commons/Footer';
import SideBar from '../commons/SideBar';
import Content from '../commons/Content';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class CustomerPage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      activeTab: {
        menu: true,
        change_order: false,
        order_history: false,
        notifications: false
      },
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick = (type) => (event) => {
    event.preventDefault();
    this.setState({
      activeTab: {
        menu: CustomerPage.showItem(type, 'showMenu'),
        change_order: CustomerPage.showItem(type, 'showOrder'),
        order_history: CustomerPage.showItem(type, 'showHistory'),
        notifications: CustomerPage.showItem(type, 'showNotification')
      },
    });
  };

  static showItem(inString, compareString) {
    return inString === compareString;

  }

  render() {
    return (
      <div>
        <NavigationBar/>
        <div className="wrapper background-image">
          <SideBar
            tabs={this.state.activeTab}
            onClick={this.onClick}
          />
          <Content
            tabs={this.state.activeTab}
          />
        </div>
        <Footer/>
      </div>
    )
  }
}

CustomerPage.propTypes = {
  // active: PropTypes.bool.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerPage);
