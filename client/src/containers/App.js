import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./navbar";
import ToastGroup from "./toast/toast-group";
import MainPage from "./main-page";
import QuestionDetailPage from "./question-detail-page";

function App() {
  return (
    <div>
      <Navbar />
      <ToastGroup />
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route
          exact
          path="/question/:id"
          component={QuestionDetailPage}
        ></Route>
        <Route exact path="/login" component={QuestionDetailPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
