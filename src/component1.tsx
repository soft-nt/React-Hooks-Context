import React, { useContext } from "react";
import GlobalContext, { IContext } from "./globalContext";

export default function Component1() {
  const context = useContext<IContext>(GlobalContext);

  return (
    <div>
      <input
        value={context.val1}
        onChange={(e: any) => {
          context.setVal1(e.target.value);
        }}
      />
      <span>{context.val1}</span>
    </div>
  );
}
