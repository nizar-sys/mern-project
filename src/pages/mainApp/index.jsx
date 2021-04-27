import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer, Header } from "../../components";
import CreateBlog from "../createBlog";
import DetailBlog from "../detailBlog";
import Home from "../home";
import "./mainApp.scss";

const MainApp = () => {
  return (
    <div className="main-app-wrapper">
      <Header />
      <div className="content-wrapper">
        <Router>
          <Switch>
            <Route path="/create" component={CreateBlog} />
            <Route path="/detail" component={DetailBlog} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default MainApp;
