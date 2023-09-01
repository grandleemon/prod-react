import React, { useState } from "react";
import styles from "./Counter.module.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {counter}
      <button className={styles.button} onClick={() => setCounter(counter + 1)}>
        increment
      </button>
      <button onClick={() => setCounter(counter - 1)}>decrement</button>
    </div>
  );
};

export default Counter;
