import React, { Fragment } from "react";
import { Navigation } from "./navigation";
import { Footer } from "./footer";
import { Main } from "./main";
import "./App.css";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <Main></Main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
