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

export class CustomerPage extends React.Component {
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
    // this.testLogin = this.testLogin.bind(this);
  }

  componentWillMount(){
    // this.testLogin();
    this.props.menuActions.getAllMenus();
    this.props.orderActions.getOrdersCustomer();
    this.props.orderActions.viewOrderHistory();
    this.props.mealActions.viewTrendingMeals();
  }

  // testLogin = () => {
  //   if(!this.props.login[0].isLoggedIn){
  //     this.context.router.history.push('/');
  //   }
  // };

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
            trendingMeals={this.props.trendingMeals}
          />
        </div>
        <Footer/>
      </div>
    )
  }
}

CustomerPage.contextTypes = {
  router: PropTypes.object
};

CustomerPage.propTypes = {
  login: PropTypes.array.isRequired,
  menus: PropTypes.array.isRequired,
  meals: PropTypes.array.isRequired,
  trendingMeals: PropTypes.array.isRequired,
  savingActions: PropTypes.object.isRequired,
  menuActions: PropTypes.object.isRequired,
  orderActions: PropTypes.object.isRequired,
  orders: PropTypes.array.isRequired,
  orderHistory: PropTypes.array.isRequired,
  mealActions: PropTypes.object.isRequired,
};

export function mapStateToProps(state, ownProps) {
  return {
    login: state.login,
    menus: state.menus,
    orders: state.orders,
    orderHistory: state.orderHistory,
    meals: state.meals,
    trendingMeals: state.trendingMeals,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    savingActions: bindActionCreators(savingActions, dispatch),
    menuActions: bindActionCreators(menuActions, dispatch),
    orderActions: bindActionCreators(orderActions, dispatch),
    mealActions: bindActionCreators(mealActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerPage);
