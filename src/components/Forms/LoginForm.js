import React from "react";
import PropTypes from 'prop-types';
import TextInput from "../commons/TextInput";

const LoginForm = ({login, onSave, onChange, saving, errors}) => {
    return (
      <div className="form-wrapper">
        <div className="form-header">login here</div>
        {errors && errors.length > 0 &&
        <div className=" white error form-control">{`${errors[0].loginError} or Category`}</div>}
      <form>
        <div className="input-group mb-3">
          <div className="input-size-default input-group-prepend">
            <label className="full input-group-text" htmlFor="form-login">Category:</label>
          </div>
          <select className="custom-select"
                  name="category"
                  id="form-login"
                  onChange={onChange('login')}
          >
            <option defaultValue="user">Choose...</option>
            <option value="user">User</option>
            <option value="caterer">Caterer</option>
          </select>
        </div>


        <TextInput
          showBrandName={true}
          type="text"
          name="username"
          label="Username:"
          value={login.username}
          onChange={onChange('login')}
        />

        <TextInput
          showBrandName={true}
          type="password"
          name="password"
          label="Password:"
          value={login.password}
          onChange={onChange('login')}
        />

        <input
          id="submit-login"
          type="submit"
          disabled={saving.saving}
          value={saving.saving ? 'Logging in...' : 'Login'}
          className="btn btn-primary full mt-3"
          onClick={onSave('login')}
        />

      </form>
      </div>
    );
};

LoginForm.propTypes = {
  login: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.object,
  errors: PropTypes.array,
};


export default LoginForm;
