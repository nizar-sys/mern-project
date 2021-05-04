import React from "react";
import { LoginBg } from "../../../assets";
import "./upload.scss";

const UploadImg = () => {
  return (
    <div className="upload">
        <img src={LoginBg} className="preview"/>
      <input type="file" />
    </div>
  );
};

export default UploadImg;
