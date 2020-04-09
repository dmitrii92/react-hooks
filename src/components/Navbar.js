import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/state-hook-example">State Hook Example</Link>
      </li>
      <li>
        <Link to="/effect-hook-example">Effect Hook Example</Link>
      </li>
      <li>
        <Link to="/reducer-hook-example">Reducer Hook Example</Link>
      </li>
    </ul>
  </nav>
);
