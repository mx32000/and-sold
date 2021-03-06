import api from './api-config';

export const loginUser = async loginData => {
  const res = await api.post("/auth/login", { authentication: loginData });
  localStorage.setItem("andSoldToken", res.data.token);
  api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
  return res.data.user;
}

export const registerUser = async registerData => {
  const res = await api.post("/users", { user: registerData });
  localStorage.setItem("andSoldToken", res.data.token);
  api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
  return res.data.user;
}

export const verifyUser = async () => {
  const token = localStorage.getItem("andSoldToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const res = await api.get("/auth/verify");
    return res.data;
  }
  return null;
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}