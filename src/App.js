import React, { Component } from 'react';
import { Route} from "react-router-dom";

import Homepage from "./pages/homepage/homepage";
import GetStarted from "./pages/GetStarted/GetStarted";
import FormPage from "./pages/FormPage/FormPage"
import Contact from "./pages/Contact/Contact"
import Prices from "./pages/Prices/Prices"
import './App.css';

class App extends Component{
  render(){
    return (
      <React.Fragment>
          <React.StrictMode>

        <Route exact path="/" component={Homepage} />
        <Route
          exact
          path="/getstarted"
          component={GetStarted}
        />
        <Route
          exact
          path="/form"
          component={FormPage}
        />
        <Route
          exact
          path="/contact"
          component={Contact}
        />
        <Route
          exact
          path="/prices"
          component={Prices}
        />
  </React.StrictMode>

      </React.Fragment>
    );
  }
}

export default App;
