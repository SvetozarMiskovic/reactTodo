export const wtls = data => {
  localStorage.setItem("defaultList", JSON.stringify(data));
};

export const wtlscl = data => {
  localStorage.setItem("customLists", JSON.stringify(data));
};

export const wtlsal = data => {
  localStorage.setItem("activeList", JSON.stringify(data));
};
