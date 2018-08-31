import React from 'react';
import {bindActionCreators} from 'redux';
import NavigationBar from '../commons/NavigationBar';
import Footer from '../commons/Footer';
import SideBarCaterer from '../commons/SideBarCaterer';
import ContentCaterer from '../commons/ContentCaterer';
import * as savingActions from '../../actions/savingActions';
import * as mealActions from '../../actions/mealActions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import toastr from "toastr";

class CatererPage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      activeTab: {
        edit_menu: true,
        add_meal: false,
      },

      mealData: {
        name: "",
        price: ""
      },
      mealAddStatus: "",
    };

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);

  }

  onClick = (type) => (event) => {
    event.preventDefault();
    this.setState({
      activeTab: {
        edit_menu: CatererPage.showItem(type, 'showMenu'),
        add_meal: CatererPage.showItem(type, 'showMeal'),
        mealAddStatus: "",
  },
    });
  };

  static showItem(inString, compareString) {
    return inString === compareString;

  }

  onChange = (type=false) =>(event) => {
    this.setState({mealAddStatus: ""});
    const field = event.target.name;
    const value = event.target.value;
    let mealData = Object.assign({}, this.state.mealData);
    mealData[field] = value;
    return this.setState({mealData: mealData});
  };

  onSave = (type) => (event) => {
    event.preventDefault();
    this.props.savingActions.saving({saving: true});
    if(type === 'addMeal'){
      console.log('saving meal');
      this.props.mealActions.addMeal(this.state.mealData)
        .then(response => {
          if(response){
            this.setState({mealAddStatus: response});
            toastr.success(response);
          }
        });

        }
      this.setState({
        mealData: {
          name: "",
          price: ""
        }
        });

  };

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
            mealData={this.state.mealData}
            saving={this.props.saving}
            onChange={this.onChange}
            onSave={this.onSave}
            errors={this.props.errors}
            mealAddStatus={this.state.mealAddStatus}
          />
        </div>
        <Footer/>
      </div>
    );
  };
}

CatererPage.propTypes = {
  savingActions: PropTypes.func.isRequired,
  mealActions: PropTypes.func.isRequired,
  saving: PropTypes.object.isRequired,
  errors: PropTypes.array
};

function mapStateToProps(state, ownProps) {
  return {
    saving: state.saving,
    errors: state.errors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    savingActions: bindActionCreators(savingActions, dispatch),
    mealActions: bindActionCreators(mealActions, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CatererPage);
