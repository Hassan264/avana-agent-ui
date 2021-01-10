import React from "react";

import AddLevelModal from "./components/AddLevelModal";
import CommissionTypeModal from "./components/CommissionTypeModal";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/add-level"} component={AddLevelModal} />
        <Route path={"/commission-type"} >
          <CommissionTypeModal levelName="Senior Agent" />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
