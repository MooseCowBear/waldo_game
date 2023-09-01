export const found = (
  boxDimension,
  clickedX,
  clickedY,
  imageWidth,
  imageHeight,
  normalizedWinningX,
  normalizedWinningY
) => {
  if (normalizedWinningX === null) return false;

  const winningX = Math.round(normalizedWinningX * imageWidth);
  const winningY = Math.round(normalizedWinningY * imageHeight);

  const maxX = clickedX + 0.5 * boxDimension;
  const minX = clickedX - 0.5 * boxDimension;
  const maxY = clickedY + 0.5 * boxDimension;
  const minY = clickedY - 0.5 * boxDimension;

  return (
    minX <= winningX && winningX <= maxX && minY <= winningY && winningY <= maxY
  );
};

/* the level might finish one of two ways: either they quit or they found the character 
  if they quit, don't bother updating the score. 
  if they finished, update it. 
  either way stop the timer and reset timer to 0 (?)

  outside of this, want to redirect appropriately
  true means increment the level
  false means navigate to game over screen
*/
export const levelFinished = (
  level,
  time,
  setRunningCallback,
  score,
  setScoreCallback,
  completed = true
) => {
  setRunningCallback(false);

  if (completed) {
    const data = { ...score };
    data[level] = time;
    setScoreCallback(data);
  }
};
