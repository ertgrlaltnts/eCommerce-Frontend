import React from "react";
import { Cnt } from "./styled-component/Counter.style";
import { Plus, Minus } from "phosphor-react";

const Counter = ({ counter, setCounter, amount }) => {
  let lowerLimit = 1;
  let upperLimit = amount;

  const handleMinus = () => {
    counter !== lowerLimit && setCounter(counter - 1);
  };
  const handlePlus = () => {
    counter !== upperLimit && setCounter(counter + 1);
  };

  return (
    <Cnt.Container>
      <Cnt.Item>
        <Minus onClick={handleMinus} />
      </Cnt.Item>
      <Cnt.Counter>{counter}</Cnt.Counter>
      <Cnt.Item>
        <Plus onClick={handlePlus} />
      </Cnt.Item>
    </Cnt.Container>
  );
};

export default Counter;
