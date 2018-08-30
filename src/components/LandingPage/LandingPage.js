import React from 'react';
import validator from 'validator'
import _ from 'lodash';
import LoginForm from '../Forms/LoginForm';
import SignUpForm from '../Forms/SignUpForm';
import { bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import * as loginActions from '../../actions/loginActions';
import * as signupActions from '../../actions/registerActions';
import * as savingActions from '../../actions/savingActions';
import PropTypes from 'prop-types';
import toastr from 'toastr';

class LandingPage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      login: {
        category: "user",
        username: "",
        password: ""
      },
      register: {
        category: "user",
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password: "",
        confirm_password: "",
        address: "NOT PROVIDED",
        brand_name: "",
      },
      form_errors:{
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password: "",
        confirm_password: "",
        brand_name: "",
      },
      activeLogin: false,
      activeRegister: false,
      showBrandName: false,
      loginClasses: 'login-form hidden',
      registerClasses: 'login-form hidden'
    };

    this.onChange = this.onChange.bind(this);
    this.onClick  = this.onClick.bind(this);
    this.onSave = this.onSave.bind(this);
    this.formValidator = this.formValidator.bind(this);
  }

  onChange = (type) =>(event) => {
    const field = event.target.name;
    const value = event.target.value;
    if (type === 'login') {
      let login = Object.assign({}, this.state.login);
      login[field] = event.target.value;
      return this.setState({login: login});
    }
    else if (type === 'register') {
      let register = Object.assign({}, this.state.register);
      let errors = Object.assign({}, this.state.form_errors);
      register[field] = event.target.value;
      errors[field] = this.validate(field, event.target.value);

      if(field === "category" && value === "caterer"){
        this .setState({showBrandName: true});
      }
      else if (field === "category" && value === "user"){
        this .setState({showBrandName: false});
      }


      this.setState({form_errors: errors});
      return this.setState({register: register});
    }
  };

  onSave = (type) => (event) => {
    event.preventDefault();
    this.props.savingActions.saving({saving: true});
    if(type === 'login'){
      this.props.loginActions.login(this.state.login)
        .then(loggedIn => {
          if(loggedIn){
            this.redirect('/customer', 'Welcome to Easy Meal');
            return loggedIn
          }

      })
        .then(res=>{console.log(res)});
      this.setState({
        login: {
          category: "user",
          username: "",
          password: ""
        }});
    }

    else if(type === 'register'){

      if(this.formValidator(this.state.register, this).emptyFields) {
        this.setState({form_errors: this.formValidator(this.state.register, this).errors});
        this.props.savingActions.saving({saving: false});
        return false;
      }
      console.log('this is testing redirecting hit');
      console.log('status before signing up.', this.state.register);
      this.props.signUpActions.signUp(this.state.register);
      this.props.savingActions.saving({saving: false});
    }
  };

  formValidator = (data, THIS) => {
    let errors = Object.assign({}, THIS.state.form_errors);
    let test_state_valid = {
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: "",
      confirm_password: "",
      brand_name: "",
    };
    let emptyFields = false;

    Object.keys(data).forEach(function(key) {

      errors[key] = THIS.validate(key, data[key]);

    });

    if(errors['address']){
      this.state.register.address = "NOT PROVIDED";
    }

    delete errors['category'];
    delete errors['address'];

    if(this.state.register.category === 'user'){
      errors['brand_name'] = "";
    }
    if(!_.isEqual(errors, test_state_valid)){
      emptyFields = true;
      console.log('errors', errors);
      console.log('state errors', this.state.form_errors);
      console.log('state regiater', this.state.register);
    }

    return {
      emptyFields: emptyFields,
      errors: errors,
    }
  };

  validate(field, data){
    if(validator.isEmpty(data)){
      return "This field is required.";
    }
    if(field === "email") {
      if (!validator.isEmail(data)) {
        return 'Please provide a valid email.';
      }
    }
    if(field === 'password'){
      if(data.length < 5){
        return 'Password too short. Atleast 5 characters long.';
      }
    }
    if(field === 'confirm_password'){
      if(data !== this.state.register.password){
        return 'Passwords don\'t match.'
      }

    }
    return "";
  }

  onClick = (button) => (event) =>{
    if(button === 'login') {
      this.setState({activeRegister: false, registerClasses: 'login-form hidden'});
      if (this.state.activeLogin) {
        this.setState({activeLogin: false, loginClasses: 'login-form hidden'});
      } else {
        this.setState({activeLogin: true, loginClasses: 'login-form show'});

      }
    }else if(button === 'signUp'){
      this.setState({activeLogin: false, loginClasses: 'login-form hidden'});
      if (this.state.activeRegister) {
        this.setState({activeRegister: false, registerClasses: 'login-form hidden'});
      } else {
        this.setState({activeRegister: true, registerClasses: 'login-form show'});

      }

    }
  };

  redirect(url, toastMessage) {
    this.setState({saving: false});
    this.context.router.history.push(url);
    toastr.success(toastMessage);

  }

  render() {
      return (
          <div className="background-image">
            <div className={this.state.loginClasses}>
              <LoginForm
                login={this.state.login}
                onChange={this.onChange}
                onSave={this.onSave}
                errors={this.props.errors}
                saving={this.props.saving.slice(-1)[0]}
              />
            </div>

            <div className={this.state.registerClasses}>
              <SignUpForm
                signUp={this.state.register}
                onChange={this.onChange}
                onSave={this.onSave}
                registering={this.props.saving.slice(-1)[0]}
                errors={this.props.errors}
                formErrors={this.state.form_errors}
                showBrandName={this.state.showBrandName}
              />
            </div>
            <div className="landing-content">
              <div className="mt-lg-3 te"></div>
                <div className="landing-content-header">
                  WELCOME TO EasyMeal

                </div>
                <div className="btn btn-primary btn-lg" onClick={this.onClick('signUp')}>Sign Up</div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div className="btn btn-primary btn-lg" onClick={this.onClick('login')}>Login</div>
            </div>

          </div>

      );
  }
}

LandingPage.propTypes = {
  signUpActions: PropTypes.object.isRequired,
  loginActions: PropTypes.object.isRequired,
  errors: PropTypes.array,
  saving: PropTypes.array,
  loggedIn: PropTypes.bool,
};

LandingPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {

  return {
    errors: state.errors,
    saving: state.saving,
    loggedIn: state.login.isLoggedIn,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginActions: bindActionCreators(loginActions, dispatch),
    signUpActions: bindActionCreators(signupActions, dispatch),
    savingActions: bindActionCreators(savingActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
