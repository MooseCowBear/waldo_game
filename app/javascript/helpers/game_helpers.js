export const found = (
  boxDimension,
  clickedX,
  clickedY,
  imageWidth,
  imageHeight,
  normalizedWinningX,
  normalizedWinningY
) => {
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
