import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import * as RoutePath from "./config/routeConfig";
import Home from "./features/home/container/homeContainer";
import LoginContainer from "./features/admin/container/loginContainer";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={`${RoutePath.Admin}`} component={LoginContainer} />
        <Route path={`${RoutePath.Home}`} exact component={Home} />
        <Redirect to={`${RoutePath.Home}`} />
      </Switch>
    </Router>
  );
};

export default App;
