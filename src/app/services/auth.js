export const isAuth = () => {
  const loggedUser = localStorage.getItem("loggedUser");
  if (loggedUser !== null) {
    return true;
  } else {
    return false;
  }
};
export const isAdmin = () => {
  const getAdmin = localStorage.getItem("isAdmin");
  if (getAdmin !== null) return Boolean(getAdmin === "true");
  return false;
};
export const logOut = () => {
  localStorage.removeItem("loggedUser");
  localStorage.removeItem("isAdmin");
};
