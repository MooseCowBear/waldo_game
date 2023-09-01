export const seconds = (time) => {
  return time % 60;
};

export const minutes = (time) => {
  return Math.floor(time / 60) % 60;
};

export const hours = (time) => {
  return Math.floor(time / 3600);
};
