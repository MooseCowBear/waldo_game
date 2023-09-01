export const getTotalScoreAndLastLevel = (score) => {
  let sum = 0;
  let lastLevel = -1;
  for (const [key, value] of Object.entries(score)) {
    // incomplete levels will have a value of null, so ignore them
    if (value) {
      sum += value;
      lastLevel = Math.max(lastLevel, key);
    }
  }
  return { sum: sum, lastLevel: lastLevel };
};
