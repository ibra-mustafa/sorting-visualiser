"use client";
import Slider from "@/components/input/slider";
import { useSortingAlgorithmsContext } from "@/context/Visualiser";
import { useEffect } from "react";

function Page() {
  const { arrayToSort, isSortingAlgo, animationSpeed, setAnimationSpeed } =
    useSortingAlgorithmsContext();
  useEffect(() => {
    console.log(arrayToSort);
    console.log("isSortingAlgo");
  }, []);
  return (
    <main className="absolute top-0 h-screen w-screen z-[-2] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#150229_1px)] bg-[size:40px_40px]">
      <div className="flex h-full justify-center flex-col">
        <div className="flex w-full flex-col lg:px-0 px-4">
          <div className="h-[66px] relative flex items-center justify-between w-full">
            <h1 className="text-gray-300 text-2xl font-light hidden md:flex">
              Sorting Visualiser
            </h1>
            <div className="flex gap-4 items-center justify-center">
              <Slider
                isDisabled={isSortingAlgo}
                value={animationSpeed}
                handleChange={(e) => setAnimationSpeed(Number(e.target.value))}
              />
            </div>
          </div>
          <div
            id="content-container"
            className="relative h-[calc(100vh-66px)] w-full p-20"
          >
            <div className="absolute bottom-[32px] w-full mx-auto left-0 right-0 flex justify-center items-end">
              {arrayToSort.map((value, index) => (
                <div
                  key={index}
                  className="array-line relative w-1 mx-0.5 shadow-lg opacity-70 rounded-lg default-line-color"
                  style={{ height: `${value}px` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
