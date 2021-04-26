import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./input.css";

const Input = ({ label, ...rest }) => {
  return (
    // <div className="input-wrapper">
    //     <p className="label">{label}</p>
    //     <input {...rest} className="form-control input-form"/>
    // </div>
    <div className="form-group">
        <input {...rest} className="input-form form-control" />
    </div>
  );
};

export default Input;
