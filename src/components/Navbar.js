import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/state-hook-example" exact>
          State Hook Example
        </NavLink>
      </li>
      <li>
        <NavLink to="/effect-hook-example" exact>
          Effect Hook Example
        </NavLink>
      </li>
    </ul>
  </nav>
);
