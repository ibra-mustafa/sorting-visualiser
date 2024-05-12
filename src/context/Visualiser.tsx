"use client";
import { SortingAlgoType } from "@/lib/types";
import { generateRandomFromInterval } from "@/lib/utils";
import { createContext, use, useContext, useEffect, useState } from "react";

interface SortingAlgoContextType {
  arrayToSort: number[];
  setArrayToSort: (array: number[]) => void;
  sortingAlgo: SortingAlgoType;
  setSortingAlgo: (algo: SortingAlgoType) => void;
  isSortingAlgo: boolean;
  setIsSortingAlgo: (isSorting: boolean) => void;
  delay: number;
  setDelay: (number: number) => void;
  animationSpeed: number;
  setAnimationSpeed: (number: number) => void;
  isAnimationFinished: boolean;
  setIsAnimationFinished: (boolean: boolean) => void;
  resetArrAndAnimation: () => void;
  runAnimation: () => void;
}
  
const SortingAlgoContext = createContext<SortingAlgoContextType | undefined>(
  undefined
);
export const SortingAlgoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [arrayToSort, setArrayToSort] = useState<number[]>([100, 30, 200]);
  const [sortingAlgo, setSortingAlgo] = useState<SortingAlgoType>("bubble");
  const [isSortingAlgo, setIsSortingAlgo] = useState<boolean>(false);
  const [delay, setDelay] = useState<number>(0);
  const [animationSpeed, setAnimationSpeed] = useState<number>(50);
  const [isAnimationFinished, setIsAnimationFinished] =
    useState<boolean>(false);
  useEffect(() => {
    resetArrAndAnimation();
    window.addEventListener("resize", resetArrAndAnimation);
  }, []);
  const resetArrAndAnimation = () => {
    const contentContainer = document.getElementById("content-container");
    if (!contentContainer) return;
    const contentContainerWidth = contentContainer?.clientWidth;
    const temporaryArr: number[] = [];
    const linesNum = contentContainerWidth / 8;
    const contentContainerHeight = contentContainer?.clientHeight;
    const maxLineHeight = Math.max(contentContainerHeight - 420, 100);
    for (let i = 0; i < linesNum; i++) {
      temporaryArr.push(generateRandomFromInterval(35, maxLineHeight));
    }
    setArrayToSort(temporaryArr);
    setIsAnimationFinished(false);
    setIsSortingAlgo(false);
  };
  const runAnimation = () => {};
  const value = {
    arrayToSort,
    setArrayToSort,
    sortingAlgo,
    setSortingAlgo,
    isSortingAlgo,
    setIsSortingAlgo,
    delay,
    setDelay,
    animationSpeed,
    setAnimationSpeed,
    isAnimationFinished,
    setIsAnimationFinished,
    resetArrAndAnimation,
    runAnimation,
  };
  return (
    <SortingAlgoContext.Provider value={value}>
      {children}
    </SortingAlgoContext.Provider>
  );
};

export const useSortingAlgorithmsContext = () => {
  const context = useContext(SortingAlgoContext);
  if (!context) {
    throw new Error(
      "useSortingAlgorithmsContext must be used within a SortingAlgoProvider"
    );
  }
  return context;
};
