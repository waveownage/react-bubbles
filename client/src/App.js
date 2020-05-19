import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/protected" component={BubblePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
