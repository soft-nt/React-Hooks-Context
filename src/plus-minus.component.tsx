import React, { useContext } from "react";
import GlobalContext, { IContext } from "./globalContext";

export default function PlusMinus() {
  const context = useContext<IContext>(GlobalContext);

  return (
    <div>
      <button onClick={context.increaseVal1}>+</button>
      <button onClick={context.decreaseVal1}>-</button>
    </div>
  );
}
