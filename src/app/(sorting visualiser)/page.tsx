"use client";
import { useSortingAlgorithmsContext } from "@/context/Visualiser";
import { useEffect } from "react";

function Home() {
  const { arrayToSort } = useSortingAlgorithmsContext();
  return <main className="absolute"></main>;
}

export default Home;
