import { createContext, useState } from "react";

interface sortingAlgoContextType {}

const SortingAlgoContex = createContext<sortingAlgoContextType | undefined>(
  undefined
);
export const SortingAlgoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <SortingAlgoContex.Provider value={{}}>
      {children}
    </SortingAlgoContex.Provider>
  ); 
};
