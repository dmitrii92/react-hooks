import React, { useContext, useState } from "react";

import { MyContext } from "../context";

export const InputForm = () => {
  const { fieldValue, setFieldValue } = useContext(MyContext);

  return (
    <form>
      <div>
        <h3>Input form</h3>
        <div>
          <label>Input</label>
          <input
            type="text"
            size="30"
            value={fieldValue}
            onChange={(event) => setFieldValue(event.target.value)}
          ></input>
        </div>
      </div>
    </form>
  );
};
