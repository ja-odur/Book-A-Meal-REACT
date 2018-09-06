import React from 'react';
import NavigationBar from '../commons/NavigationBar';
import Footer from '../commons/Footer';
import SideBar from '../commons/SideBar';
import Content from '../commons/Content';
import {bindActionCreators} from 'redux';
import * as menuActions from '../../actions/menuActions';
import * as mealActions from '../../actions/mealActions';
import * as savingActions from '../../actions/savingActions';
import * as orderActions from '../../actions/orderActions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import toastr from 'toastr';

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
    this.props.menuActions.getAllMenus();
    this.props.orderActions.getOrdersCustomer();
    this.props.orderActions.viewOrderHistory();
  }

  onClick = (type, id=false) => (event) => {
    event.preventDefault();

    if(type === "orderMeal"){
      this.props.orderActions.orderMeal(id)
        .then(response => {
          if(response.success){
            toastr.success(response.message);
          }
          else {
            toastr.error(response.message);
          }
        });
    }
    else if (type === "PointMeal"){
      console.log('point id', id);
      this.props.mealActions.pointMeal(id);
    }
    else if (type === 'DeleteOrder'){
      this.props.orderActions.removeOrder(id)
        .then(response => {
          if(response.success){
            toastr.success(response.message);
          }
          else {
            toastr.error('Sorry, orders can not be deleted beyond one hour of existence.');
          }
        });
    }
    else{
      this.setState({
        activeTab: {
          menu: CustomerPage.showItem(type, 'showMenu'),
          change_order: CustomerPage.showItem(type, 'showOrder'),
          order_history: CustomerPage.showItem(type, 'showHistory'),
          notifications: CustomerPage.showItem(type, 'showNotification')
        },
      });
      this.props.orderActions.getOrdersCustomer();
    }
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
            onClick={this.onClick}
            orders={this.props.orders}
            orderHistory={this.props.orderHistory}
          />
        </div>
        <Footer/>
      </div>
    )
  }
}

CustomerPage.propTypes = {
  menus: PropTypes.array.isRequired,
  savingActions: PropTypes.object.isRequired,
  menuActions: PropTypes.object.isRequired,
  orderActions: PropTypes.object.isRequired,
  orders: PropTypes.array.isRequired,
  orderHistory: PropTypes.array.isRequired,
  mealActions: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    menus: state.menus,
    orders: state.orders,
    orderHistory: state.orderHistory,
    meals: state.meals,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    savingActions: bindActionCreators(savingActions, dispatch),
    menuActions: bindActionCreators(menuActions, dispatch),
    orderActions: bindActionCreators(orderActions, dispatch),
    mealActions: bindActionCreators(mealActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerPage);
