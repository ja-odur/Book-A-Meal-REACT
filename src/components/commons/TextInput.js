import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({type, name, label, onChange, placeholder, value, error, showBrandName}) => {
  var wrapperClass = "";
  var inputClasses = "input-group mt-3";

  if (error && error.length > 0){
    // eslint-disable-next-line
    wrapperClass += " "+ ' text-center text-danger bg-white d-block mt-1 rounded border border-danger';
    inputClasses += " border rounded border-danger";
  }

  return (
    <div className={showBrandName ? "" : "hidden"}>
      <div className={inputClasses}>
        <div className="input-group-prepend input-size-default text-right">
          <label className="input-group-text full text_right" htmlFor={name}>{label}</label>
        </div>

        <input
          type={type}
          name={name}
          className="username form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      {error && <div className={wrapperClass}>{error}</div>}

    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  showBrandName: PropTypes.bool,
  type: PropTypes.string,
};

export default TextInput;
