import React, {useState} from 'react'
import styles from "./Counter.module.scss"

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      Counter: {counter}
      <button className={styles.btn}
              onClick={() => setCounter(prev => prev + 1)}
      >
        Increment
      </button>
      <button className={styles.btn}
              onClick={() => setCounter(prev => prev - 1)}
      >
        Decrement
      </button>
    </div>
  );
};
