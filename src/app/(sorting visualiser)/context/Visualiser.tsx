import { createContext, useState } from "react";

interface props {
  children: React.ReactNode;
}
export type Algo = "merge sort" | "insertion sort";
interface Settings {
  sortType: "merge sort" | "insertion sort";
  arrayLen: number;
  delay: number;
}
const initialVal: Settings = {
  sortType: "merge sort",
  arrayLen: 25,
  delay: 15,
};

interface SettingsContext {
  settings: Settings;
  setSettings?: React.Dispatch<React.SetStateAction<Settings>>;
}
export const Context = createContext<SettingsContext>({
  settings: initialVal,
});
const AlgoContext: React.FC<props> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(initialVal);
  return (
    <Context.Provider value={{ settings, setSettings }}>
      {children}
    </Context.Provider>
  );
};

export default AlgoContext;
