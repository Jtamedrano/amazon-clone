import React, { useState } from "react";
import styled from "styled-components";

const StyleInputGroup = styled.div`
display: flex;
flex-flow: column;

label {
  margin-bottom: 5px;
}

input {
  height: 30px;
  margin-bottom: 10px;
  background-color: ${(props) =>
    props.missing ? "rgb(250, 210, 210)" : "white"};
  width: 98%;
  padding-left: 0.5em;
  border-color: ${(props) => (props.missing ? "red" : "darkgray")};
  border-width: 1px;
  border-radius 3px;
}
`;

function InputGroup({
  label,
  type,
  name,
  value,
  handleChange,
  missing,
  autoType,
}) {
  return (
    <StyleInputGroup missing={missing} className="inputGroup">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className={name}
        name={name}
        id={name}
        value={value}
        onChange={(evt) => handleChange(evt.target.value)}
        autoComplete={autoType ? autoType : "off"}
      />
    </StyleInputGroup>
  );
}

export default InputGroup;
