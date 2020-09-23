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
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Homepage} />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/getstarted"}
          component={GetStarted}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/form"}
          component={FormPage}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/contact"}
          component={Contact}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/prices"}
          component={Prices}
        />

      </React.Fragment>
    );
  }
}

export default App;
