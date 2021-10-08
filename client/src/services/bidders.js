import api from "./api-config";

export const getAuctionBidders = async (auctionId, showLots = false) => {
  const res = await api.get(`/auctions/${auctionId}/bidders${showLots ? "?lots=true" : ""}`);
  return res.data;
}

export const createAuctionBidder = async (auctionId, bidderData) => {
  const res = await api.post(`/auctions/${auctionId}/bidders`, bidderData);
  return res.data;
}