import { createContext, useContext, useReducer } from "react";

export const StateProviderContext = createContext();

//children is App component which is wrapped inside the provider
export const StateProvider = ({ initialState, reducer, children }) => (
  <StateProviderContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateProviderContext.Provider>
);

export const useStateProviderValue = () => useContext(StateProviderContext);
