import React from 'react';
import './Input.css';

function Input({ type, placeholder, value, onChange, name }) {
  return (
    <input
      className="input-field"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
}

export default Input;