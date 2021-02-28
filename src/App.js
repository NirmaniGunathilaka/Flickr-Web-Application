import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Search from "./components/Search";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <Route path="/" exact component={Home} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/search" exact component={Search} />
        </div>
      </Router>
    </div>
  );
}

export default App;
