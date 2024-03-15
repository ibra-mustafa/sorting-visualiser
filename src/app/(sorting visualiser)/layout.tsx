"use client";
import { Algo, Context } from "@/app/(sorting visualiser)/context/Visualiser";
import "@/global.css";
import { useContext } from "react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { settings, setSettings } = useContext(Context);
  const onArrayChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSettings
      ? setSettings((c) => ({ ...c, arrayLen: Number(e.target.value) * 5 }))
      : null;
  };
  const onDelayChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSettings
      ? setSettings((c) => ({ ...c, delay: Number(e.target.value) * 5 }))
      : null;
  };
  const onAlgorithmChange = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    type: Algo
  ) => {
    setSettings ? setSettings((c) => ({ ...c, sortType: type })) : null;
    console.log(settings.sortType);
  };
  return (
    <html lang="en">
      <body>
        <nav className="grid grid-flow-row bg-grey-300 sm:row-span-2 row-span-3 w-screen grid grid-flow-row">
          <div className="p-4 gap-4 flex items-center justify-center w-full">
            <button
              className="border border-teal-100 p-2 "
              onClick={(e) => {
                onAlgorithmChange(e, "merge sort");
              }}
            >
              Merge Sort
            </button>
            <button
              className="border border-teal-100 p-2 "
              onClick={(e) => {
                onAlgorithmChange(e, "insertion sort");
              }}
            >
              Insertion Sort
            </button>
            <button className="underline border border-teal-100 p-2 ">
              Sort !
            </button>
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="itemsAmount">
              Array Length: {settings.arrayLen}
            </label>
            <input
              defaultValue={25}
              min={1}
              type="range"
              name="itemsAmount"
              id="itemsAmount"
              className="w-full max-w-xl"
              onChange={onDelayChange}
            />
            <label htmlFor="range">Delay: {settings.delay}</label>
            <input
              defaultValue={15}
              min={3}
              type="range"
              name="delay"
              id="delay"
              className="w-full max-w-xl"
              onChange={onArrayChange}
            />
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
