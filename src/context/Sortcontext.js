import React ,{ createContext, useContext, useState } from "react";
export const SortContext = createContext();

export const SortProvider = ({ children }) => {
    const [state1, setState1] = useState(false);
    const [state2, setState2] = useState(false);

    const LowtoHigh = () => {
        if (state2 == true)
        {
            setState2(false)
        }
        setState1(true)
    }
    const HightoLow = () => {
        if (state1 == true)
        {
            setState1(false)
        }
        setState2(true)
    }
      return (
          <SortContext.Provider value={{state1,state2,LowtoHigh,HightoLow  }} >
            {children}
          </SortContext.Provider>
        );
  }