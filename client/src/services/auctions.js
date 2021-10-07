import api from "./api-config";

export const getUserAuctions = async () => {
  const res = await api.get("/auctions");
  return res.data;
}

export const getAuction = async id => {
  const res = await api.get(`/auctions/${id}`);
  return res.data;
}

export const createAuction = async auctionData => {
  const res = await api.post(`/auctions`, auctionData);
  return res.data;
}

export const editAuction = async (id, auctionData) => {
  const res = await api.put(`/auctions/${id}`, auctionData);
  return res.data;
}