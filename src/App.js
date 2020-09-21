import React, { Component } from 'react';
import { Route} from "react-router-dom";

import Homepage from "./pages/homepage/homepage";
import GetStarted from "./pages/GetStarted/GetStarted"
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

      </React.Fragment>
    );
  }
}

export default App;
