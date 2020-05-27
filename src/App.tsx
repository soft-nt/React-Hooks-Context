import React, { useState } from "react";
import "./styles.css";
import GlobalContext, { IContext } from "./globalContext";
import Component1 from "./component1";
import PlusMinus from "./plus-minus.component";

export default function App() {
  const [val1, setVal1] = useState<Number>(0);

  const initialState: IContext = {
    val1: val1,
    increaseVal1: () => {
      setVal1(+val1 + 1);
    },
    decreaseVal1: () => {
      setVal1(+val1 - 1);
    },
    setVal1: (val: Number) => {
      setVal1(val);
    }
  };

  return (
    <GlobalContext.Provider value={initialState}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <Component1 />
        <PlusMinus />
      </div>
    </GlobalContext.Provider>
  );
}
