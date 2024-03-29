import React from "react";
import axios from "axios";
import "./App.css";
import { Route, HashRouter as Router } from "react-router-dom";
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Comments from "../Comments/Comments";
import Review from "../Review/Review";
import Success from "../Success/Success";
import Home from "../Home/Home";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
        <Button variant='contained' size='small' className="homeBtn" color='primary'>
          <a href="/#/home">Home</a>
        </Button>
        <Button variant='contained' size='small' className="homeBtn" color='secondary'>
          <a href="/#/review">Review</a>
        </Button>
      </header>
      <Router>
        <Route path="/feeling">
          <Feeling />
        </Route>
        <Route path="/understanding">
          <Understanding />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
