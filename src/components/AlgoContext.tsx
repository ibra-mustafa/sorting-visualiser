'use client'
import { createContext, useState } from "react"

interface props {
    children: React.ReactNode
}
interface Settings {
  sortType: 'merge srort' | 'insertion sort';
  arrayLen : number;
  delay: number;
}
const initialVal: Settings= {
  sortType: 'merge srort',
  arrayLen : 25,
  delay: 15,
}

interface SettingsContext {
  settings: Settings;
  setSettings? : React.Dispatch<React.SetStateAction<Settings>>
}
const context = createContext<SettingsContext>({
  settings:initialVal
})
const AlgoContext : React.FC<props> = ({children})=> {
  const [settings,setSettings] = useState<Settings>()
  return (
    <div>{children}</div>
  )
}

export default AlgoContext