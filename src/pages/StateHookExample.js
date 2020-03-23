import React, { useState } from "react";

export const StateHookExample = () => {
  // Объявляем новую переменную состояния "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
      <h4>
        {" "}
        For more information
        <a href="https://reactjs.org/docs/hooks-state.html"> see.</a>
      </h4>
    </div>
  );
};
