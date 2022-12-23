import React from "react";

function Input(props) {
  const { children, type, placeholder, onChange } = props;
  return (
    <label className="input">
      <b>{children}</b>
      <input onChange={onChange} type={type} placeholder={placeholder}></input>
    </label>
  );
}

export default Input;
