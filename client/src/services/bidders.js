import api from "./api-config";

export const getAuctionBidders = async (auctionId, showLots = false) => {
  const res = await api.get(`/auctions/${auctionId}/bidders${showLots ? "?lots=true" : ""}`);
  return res.data;
}