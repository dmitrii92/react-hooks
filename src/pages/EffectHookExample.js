import React, { useState, useEffect } from "react";

export const EffectHookExample = () => {
  // Объявляем новую переменную состояния "count"
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    document.title = `Вы нажали ${count} раз`;
  });

  return (
    <div>
      <h3>Заголовок документа обновляется с помощью useEffect</h3>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
      <h4>
        For more information
        <a href="https://reactjs.org/docs/hooks-effect.html"> see.</a>
      </h4>
    </div>
  );
};
