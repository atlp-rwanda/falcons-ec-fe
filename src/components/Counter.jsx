import React, { useState } from 'react';
import useCounter from '../hooks/useCounter';
import { Button } from './Button';

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
    <div data-testid="counter">
      <p>{count}</p>
      <Button
        text="Increment"
        backgroundColor="Green"
        textColor="black"
        onClick={handleIncrement}
      />
      <Button
        text="Decrement"
        backgroundColor="yellow"
        textColor="black"
        onClick={handleDecrement}
      />
      <Button
        text="Reset"
        backgroundColor="orange"
        textColor="black"
        onClick={handleReset}
      />
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
