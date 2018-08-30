import React from 'react';
import NavigationBar from '../commons/NavigationBar';
import Footer from '../commons/Footer';
import SideBarCaterer from '../commons/SideBarCaterer';
import ContentCaterer from '../commons/ContentCaterer';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class CatererPage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      activeTab: {
        edit_menu: true,
        add_meal: false,
      },
    };

    this.onClick = this.onClick.bind(this);

  }

  onClick = (type) => (event) => {
    event.preventDefault();
    this.setState({
      activeTab: {
        edit_menu: CatererPage.showItem(type, 'showMenu'),
        add_meal: CatererPage.showItem(type, 'showMeal'),
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
          <SideBarCaterer
            tabs={this.state.activeTab}
            onClick={this.onClick}
          />
          <ContentCaterer
            tabs={this.state.activeTab}
          />
        </div>
        <Footer/>
      </div>
    );
  };
}

CatererPage.propTypes = {

};

function mapStateToProps(state, ownProps) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CatererPage);
