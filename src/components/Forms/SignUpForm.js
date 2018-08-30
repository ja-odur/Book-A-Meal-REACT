import React from "react";
import PropTypes from 'prop-types';
import TextInput from "../commons/TextInput";

const SignUpForm = ({signUp, onSave, onChange, registering, errors, formErrors, showBrandName}) => {
  return (
    <div>
      <div className="form-wrapper">
        <div className="form-header">signup here</div>
        {errors && errors.length > 0 &&
        <div className=" white error form-control">{errors[0].signUpError}</div>}
        <form>
          <div className="input-group mb-3">
            <div className="input-size-default input-group-prepend">
              <label className="full input-group-text" htmlFor="form-signUp">Category:</label>
            </div>
            <select className="custom-select"
                    name="category"
                    id="form-signUp"
                    onChange={onChange('register')}
            >
              <option defaultValue="user">Choose...</option>
              <option value="user">User</option>
              <option value="caterer">Caterer</option>
            </select>
          </div>

          <TextInput
            showBrandName={true}
            type="text"
            name="first_name"
            label="First Name:"
            value={signUp.firstName}
            onChange={onChange('register')}
            error={formErrors.first_name}
          />
          <TextInput
            showBrandName={true}
            type="text"
            name="last_name"
            label="Last Name:"
            value={signUp.lastName}
            onChange={onChange('register')}
            error={formErrors.last_name}
          />
          <TextInput
            showBrandName={true}
            type="email"
            name="email"
            label="Email:"
            value={signUp.email}
            onChange={onChange('register')}
            error={formErrors.email}
          />
          <TextInput
            showBrandName={true}
            type="text"
            name="username"
            label="Username:"
            value={signUp.username}
            onChange={onChange('register')}
            error={formErrors.username}
          />

          <TextInput
            showBrandName={showBrandName}
            type="text"
            name="brand_name"
            label="Brand Name:"
            value={signUp.brand_name}
            onChange={onChange('register')}
            error={formErrors.brand_name}
          />
          <TextInput
            showBrandName={true}
            type="password"
            name="password"
            label="Password:"
            value={signUp.password}
            onChange={onChange('register')}
            error={formErrors.password}
          />
          <TextInput
            showBrandName={true}
            type="password"
            name="confirm_password"
            label="Confirm Password:"
            value={signUp.confirmPassword}
            onChange={onChange('register')}
            error={formErrors.confirm_password}
          />
          <TextInput
            showBrandName={true}
            type="text"
            name="address"
            label="Address:"
            value={signUp.address}
            onChange={onChange('register')}
            error={''}
          />

          <input
            showBrandName={true}
            type="submit"
            disabled={registering.saving}
            value={registering.saving ? 'Registering...' : 'Register'}
            className="btn btn-primary full mt-3"
            onClick={onSave('register')}
          />

        </form>
      </div>
    </div>
  );
};

SignUpForm.propTypes = {
  signUp: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  registering: PropTypes.object,
  errors: PropTypes.object,
  formErrors: PropTypes.object,
  showBrandName: PropTypes.bool,
};


export default SignUpForm;
