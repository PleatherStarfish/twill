import React, { createContext, useContext, useReducer } from "react";

export const ModuleListContext = createContext();
export const ModuleListProvider = ({ reducer, initialState, children }) => (
  <ModuleListContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </ModuleListContext.Provider>
);

export const useModuleListState = () => useContext(ModuleListContext);
