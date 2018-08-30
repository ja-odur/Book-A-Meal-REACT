import {render} from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import App from "./App";
import React from "react";

export default  render(
  <BrowserRouter>
    <div className="full-page">
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/app" component={App}/>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
