import React from "react";

import AddLevelModal from "./components/AddLevelModal";
import CommissionTypeModal from "./components/CommissionTypeModal";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/add-level"} >
          <AddLevelModal id="addLevelId"/>
        </Route>
        <Route path={"/commission-type"} >
          <CommissionTypeModal levelName="Senior Agent" id="79823e8b-b9f3-4be2-8135-01202c952a87-1609946945050" />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
