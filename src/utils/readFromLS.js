export const readFromLS = () => {
  const data = JSON.parse(localStorage.getItem("defaultList"));

  return data;
};

export const readCLFromLS = () => {
  const data = JSON.parse(localStorage.getItem("customLists"));

  return data;
};

export const readALFromLS = () => {
  const data = JSON.parse(localStorage.getItem("activeList"));
  return data;
};
