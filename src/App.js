import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import "material-design-icons/iconfont/material-icons.css";
import MainApp from "./containers/MainApp.js";
import Details from "./containers/Details.js";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    // <MainApp />
    <main>
      <Switch>
        <Route exact path="/" component={MainApp} />
        <Route path="/details" component={Details} />
      </Switch>
    </main>
  );
}

export default App;
