import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

import { Home } from "./pages/Home";
import { StateHookExample } from "./pages/StateHookExample";
import { Navbar } from "./components/Navbar";
import { EffectHookExample } from "./pages/EffectHookExample";
import { ReducerHookExample } from "./pages/ReducerExample";
import { ContextHookExample } from "./pages/ContextHookExample";

function App() {
  const appLocation = window.location.pathname.toString();
  console.log(appLocation);
  return (
    <HashRouter>
      <h1>Simple React App in JS</h1>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/state-hook-example" exact component={StateHookExample} />
        <Route
          path="/effect-hook-example"
          exact
          component={EffectHookExample}
        />
        <Route
          path="/reducer-hook-example"
          exact
          component={ReducerHookExample}
        />
        <Route path="/context-hook-example" component={ContextHookExample} />
      </Switch>
    </HashRouter>
  );
}

export default App;
