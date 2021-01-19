import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import SingleCockTail from "./pages/SingleCockTail";
import Error from "./pages/Error";
import Navbar from './components/NavBar';

function App() {
  return (
    
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/reviews">
          <Reviews />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCockTail />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
