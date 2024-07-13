export const findMinMaxForSlider = (arr) => {
  const result = {
    max: Math.max(...arr),
    min: Math.min(...arr)
  };
  return result
}