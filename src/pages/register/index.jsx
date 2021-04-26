import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./register.css";
import 'font-awesome/css/font-awesome.min.css';
import { RegisterBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";

const Register = () => {
  return (
    <div className="main-page d-flex">
      <div className="left">
        <img src={RegisterBg} className="bg-img" />
      </div>
      <div className="right d-flex justify-content-center flex-column">
        <h2 className="text-center">Sign Up</h2>
        <Input label="Fullname" placeholder="Full Name" />
        <Input label="Email" placeholder="Email" />
        <Input label="Password" placeholder="Password" />
        <Gap height={10}/>
        <Button title="Register" className="btn btn-primary"/>
        <Gap height={100}/>
        <Link title="Back to Login"/>
      </div>
    </div>
  );
};

export default Register;
