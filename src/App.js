import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { StateHookExample } from "./pages/StateHookExample";
import { Navbar } from "./components/Navbar";
import { EffectHookExample } from "./pages/EffectHookExample";

function App() {
  return (
    <BrowserRouter className="App">
      <h1>Simple React App in JS</h1>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/state-hook-example" component={StateHookExample} />
        <Route path="/effect-hook-example" component={EffectHookExample} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
