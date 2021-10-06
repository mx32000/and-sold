import api from "./api-config";

export const getUserAuctions = async () => {
  const res = await api.get("/auctions");
  return res.data;
}