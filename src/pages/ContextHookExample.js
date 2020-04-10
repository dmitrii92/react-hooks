import React, { useState } from "react";
import { MyContext } from "../context";
import { InputForm } from "../components/InputForm";
import { Output } from "../components/Output";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";

export const ContextHookExample = () => {
  const [fieldValue, setFieldValue] = useState();

  return (
    <MyContext.Provider value={{ fieldValue, setFieldValue }}>
      <div>
        <h3>ContextHookExample</h3>
        <nav>
          <ul>
            <NavLink to="/context-hook-example/input">Input</NavLink>
          </ul>
          <ul>
            <NavLink to="/context-hook-example/output">Output</NavLink>
          </ul>
        </nav>
        <Switch>
          <Route
            path="/context-hook-example/input"
            exact
            component={InputForm}
          />
          <Route path="/context-hook-example/output" exact component={Output} />
          <Redirect to="/context-hook-example/input"></Redirect>
        </Switch>
      </div>
    </MyContext.Provider>
  );
};
