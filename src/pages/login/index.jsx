import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { LoginBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";


const Login = () => {
  return (
    <div className="main-page d-flex">
      <div className="left">
        <img src={LoginBg} className="bg-img" />
      </div>
      <div className="right d-flex justify-content-center flex-column">
        <h2 className="text-center">Sign In</h2>
        <Input label="Email" placeholder="Email" />
        <Input label="Password" placeholder="Password" />
        <Gap height={10} />
        <Button title="Login" className="btn btn-success" />
        <Gap height={100} />
        <Link title="Create Account" />
      </div>
    </div>
  );
};

export default Login;
