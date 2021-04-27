import React from "react";
import { LogoFooter, LogoGit, LogoIg } from "../../../assets";
import './footer.scss';

const Icon = ({img}) =>{
    return(
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img}/>
        </div>
    )
}
const Footer = () => {
  return (
    <div className="">
      <div className="footer">
        <div className="d-flex">
          <img src={LogoFooter} className="logo" alt="Logo" />
        </div>
        <div className="icon-medsos-wrapper">
            <Icon img={LogoIg}/>
            <Icon img={LogoGit}/>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright &copy; 2021 Muhamad Nizar <i>All Right Reserved</i></p>
      </div>
    </div>
  );
};

export default Footer;
