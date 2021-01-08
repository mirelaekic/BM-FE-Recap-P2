import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Start from "./components/Start"
import Play from "./components/Play"
import Questions from "./components/Questions"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Start}/>
        <Route path="/play" exact component={Play} />
        <Route path="/start" exact component={Questions} />
      </Router>
    </div>
  );
}

export default App;
