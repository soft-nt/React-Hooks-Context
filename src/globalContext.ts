import { createContext } from "react";

export interface IContext {
  val1: number;
  increaseVal1: () => void;
  decreaseVal1: () => void;
  setVal1: (val: Number) => void;
}

const initialState: IContext = {
  val1: 5,
  increaseVal1: () => {
    throw new Error("increaseVal1 function must be overridden");
  },
  decreaseVal1: () => {
    throw new Error("decreaseVal1 function must be overridden");
  },
  setVal1: (val: Number) => {
    throw new Error("setVal1 function must be overridden");
  }
};

const GlobalContext = createContext<IContext>(initialState);
export default GlobalContext;
