import api from './config';

export const loginUser = async (loginData) => {
  const res = await api.post("/auth/login", { authentication: loginData });
  localStorage.setItem('andSoldToken', res.data.token);
  api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
  return res.data.user;
}