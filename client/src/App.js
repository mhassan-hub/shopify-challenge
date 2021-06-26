// import logo from "./logo.svg";
// import "./App.css";
import New from "./components/New";
import React from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  const history = useHistory();
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/new">
            <New />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
