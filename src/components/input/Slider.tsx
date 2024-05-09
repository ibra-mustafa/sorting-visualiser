import { MIN_ANIMATION_SPEED, MAX_ANIMATION_SPEED } from "@/lib/utils";
import React from "react";

function Slider({
  min = MIN_ANIMATION_SPEED,
  max = MAX_ANIMATION_SPEED,
  step = 10,
  value,
  handleChange,
  isDisabled = false,
}: {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
}) {
  return (
    <div className="flex gap-2 items-center justify-center">
      <span className="text-center text-gray-300">Slow</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
        disabled={isDisabled}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700"
      />
    </div>
  );
}

export default Slider;
