import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, MainApp, Register } from "../../pages";
import CreateBlog from "../../pages/createBlog";
import DetailBlog from "../../pages/detailBlog";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/create'>
          <CreateBlog />
        </Route>
        <Route path='/detail'>
          <DetailBlog />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/' exact>
          <MainApp/>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
