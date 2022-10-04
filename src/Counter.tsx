import React, { useState } from "react";

function Counter() {
  const [count, countSet] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => countSet(count + 1)}>Add one</button>
      <p role="contentinfo">Count is {count}</p>
    </div>
  );
}

export default Counter;
