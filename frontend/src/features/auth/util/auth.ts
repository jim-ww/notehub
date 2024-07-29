import Cookies from "js-cookie";

export const getToken = () => {
  return Cookies.get("jwtToken");
};

export const setToken = (token: string) => {
  Cookies.set("jwtToken", token, { expires: 7 });
};

export const removeToken = () => {
  Cookies.remove("jwtToken");
};
