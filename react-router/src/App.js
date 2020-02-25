import React, { Fragment } from "react";
import { Navigation } from "./navigation";
import { Footer } from "./footer";
import { Main } from "./main";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Navigation></Navigation>
      <Main></Main>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
