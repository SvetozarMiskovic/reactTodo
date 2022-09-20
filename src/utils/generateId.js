export const generateId = () => {
  const randomNumber = Math.floor(Math.random() * 100000) + 1;

  return randomNumber;
};
