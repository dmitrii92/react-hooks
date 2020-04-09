import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  HashRouter,
} from "react-router-dom";

import { Home } from "./pages/Home";
import { StateHookExample } from "./pages/StateHookExample";
import { Navbar } from "./components/Navbar";
import { EffectHookExample } from "./pages/EffectHookExample";
import { Context } from "./context";
import { ReducerHookExample } from "./pages/ReducerExample";

function App() {
  const appLocation = window.location.pathname.toString();
  console.log(appLocation);
  return (
    <Context.Provider>
      <HashRouter>
        <h1>Simple React App in JS</h1>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/state-hook-example"
            exact
            component={StateHookExample}
          />
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
        </Switch>
      </HashRouter>
    </Context.Provider>
  );
}

export default App;
