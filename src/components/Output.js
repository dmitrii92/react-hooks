import React, { useContext } from "react";

import { MyContext } from "../context";

export const Output = () => {
  const { fieldValue } = useContext(MyContext);

  return (
    <div>
      <h3>Output form</h3>
      <div>
        <label>Output:</label>
        <output>{fieldValue}</output>
      </div>
    </div>
  );
};
