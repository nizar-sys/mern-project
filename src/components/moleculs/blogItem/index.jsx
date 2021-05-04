import React from "react";
import { useHistory } from "react-router";
import { RegisterBg } from "../../../assets";
import "./blog.scss";
const BlogItem = () => {
  const history = useHistory()
  return (
    <div className="blog-item" onClick={()=>history.push('/detail')} style={{cursor: 'pointer'}}>
      <img src={RegisterBg} className="img-thumb"/>
      <div className="content-detail">
          <p className="title">title</p>
          <p className="author">author</p>
          <p className="body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est exercitationem dolores expedita facilis obcaecati harum, nobis soluta ducimus aliquid natus mollitia? Quisquam, labore obcaecati voluptates mollitia commodi esse reiciendis iusto!z</p>
      </div>
    </div>
  );
};

export default BlogItem;
