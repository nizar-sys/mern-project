import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./button.css";

const Button = ({ title, ...rest }) => {
  return <button {...rest}>{title}</button>;
};

export default Button;
