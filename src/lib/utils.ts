export const MIN_ANIMATION_SPEED = 100;
export const MAX_ANIMATION_SPEED = 400;

export function generateRandomFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}