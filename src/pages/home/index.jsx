import React from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";
import { useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory()
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="Create Blog" className="btn btn-success" onClick={()=> history.push('/create')} />
      </div>
      <Gap height={10} />
      <div className="content-wrapper">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div className="pagination">
        <Button title="Previous" className="btn btn-success" /> |
        <Gap height={20} />
        <Button title="Next" className="btn btn-success" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
