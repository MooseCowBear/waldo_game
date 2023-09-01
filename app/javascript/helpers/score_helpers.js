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
  return { time: sum, level: lastLevel };
};

export const displayName = (name) => {
  if (name.trim() === "") {
    return "Anonymous";
  }
  return name;
};

export const hasCompletedLevel = (score) => {
  return Object.values(score).some(x => x !== null);
}