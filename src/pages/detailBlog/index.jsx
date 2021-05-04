import React from "react";
import { useHistory } from "react-router";
import { RegisterBg } from "../../assets";
import {Button, Link} from "../../components";
import "./detailBlog.scss";

const DetailBlog = () => {
  const history = useHistory();
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} />
      <p className="blog-title">title</p>
      <p className="blog-author">author</p>
      <p className="blog-body">body</p>
      <Button title="Kembali" onClick={() => history.push("/")} className="btn btn-success"/>
    </div>
  );
};

export default DetailBlog;
