export const levelDescription = (level) => {
  const descriptions = { 0: "Easy", 1: "Medium", 2: "Hard", 3: "Impossible" };
  return descriptions[level];
};

export const levelInfo = (level) => {
  return {
    0: { x: 0.138671875, y: 0.1605839416 },
    1: { x: 0.6859375, y: 0.47573529411 },
    2: { x: 0.02708333333, y: 0.74531024531 },
    3: { x: null, y: null },
  };
};
