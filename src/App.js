import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="content">
            <Switch>
              <Route exact path="/" component={HomePage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
