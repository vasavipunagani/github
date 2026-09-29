import React, { useState } from "react";

function CounterUseState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Count: {count}</h3>

      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  );
}

export default CounterUseState;