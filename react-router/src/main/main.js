import React from "react";
import { Home } from "./home";
import { AddEmployee } from "./add-employee";
import { PageNotFound } from "../page-not-found";
import { Route, Switch } from "react-router-dom";
export default function main() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/add" component={AddEmployee}></Route>
        {/* exact matches the
        exact path on contrary switch returns the first matching route */}
        <Route component={PageNotFound}></Route>
      </Switch>
    </div>
  );
}
