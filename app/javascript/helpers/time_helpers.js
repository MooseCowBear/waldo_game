export const seconds = (time) => {
  return (time / 1000) % 60;
};

export const minutes = (time) => {
  return Math.floor(time / 60000) % 60;
};

export const hours = (time) => {
  return Math.floor(time / 3600000);
};
