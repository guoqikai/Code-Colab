import React from "react";
import { Route, Switch } from 'react-router-dom'
import Navbar from './navbar'
import MainPage from "./main-page";

import './App.css'



function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/login" component={MainPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
