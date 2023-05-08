import React, { useState } from 'react';
import useCounter from '../hooks/useCounter';

export default function Counter() {
  const [value, setValue] = useState(0);
  const [count, actions] = useCounter();

  const handleIncrement = () => {
    actions.increment();
  };
  const handleDecrement = () => {
    actions.decrement();
  };
  const handleReset = () => {
    actions.reset();
  };
  const handleIncrementByValue = (number) => {
    actions.incrementByValue(number);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleIncrementByValue(value);
  };

  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
      <form onSubmit={handleSubmit}>
        {' '}
        <input
          type="number"
          placeholder="Enter a number"
          onChange={(e) => {
            setValue(parseInt(10, e.target.value));
          }}
        />
        <button type="submit">Increment by Value</button>
      </form>
    </div>
  );
}
