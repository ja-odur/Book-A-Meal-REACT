import React from 'react';
import NavigationBar from '../commons/NavigationBar';
import Footer from '../commons/Footer';
import SideBar from '../commons/SideBar';
import Content from '../commons/Content';
import {bindActionCreators} from 'redux';
import * as menuActions from '../../actions/menuActions';
import * as savingActions from '../../actions/savingActions';
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

  componentWillMount(){
    this.props.menuActions.getAllMenus()
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
            menus={this.props.menus}
          />
        </div>
        <Footer/>
      </div>
    )
  }
}

CustomerPage.propTypes = {
  menus: PropTypes.object.isRequired,
  savingActions: PropTypes.object.isRequired,
  menuActions: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    menus: state.menus
  };
}

function mapDispatchToProps(dispatch) {
  return {
    savingActions: bindActionCreators(savingActions, dispatch),
    menuActions: bindActionCreators(menuActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerPage);
