import React, { Component } from 'react';
import { Route} from "react-router-dom";

import Homepage from "./pages/homepage/homepage";

import './App.css';

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Homepage/>
      </React.Fragment>
    )
  }
}

export default App;
