import React from "react";
import { Footer, Header } from "../../components";
import '../mainApp/mainApp.scss';

const CreateBlog = () => {
  return (
    <div className="main-app-wrapper">
      <Header />
      <div className="content-wrapper">
        <p>CreateBlog</p>
      </div>
      <Footer />
    </div>
  );
};

export default CreateBlog;
