import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function BidderDetail(props) {
  const [bidder, setBidder] = useState(null);
  const { bidders } = props;
  const { id } = useParams();

  useEffect(() => {
    if (bidders.length) {
      const bidder = bidders.find(auctionBidder => auctionBidder.id === Number(id));
      setBidder(bidder);
    }
  }, [bidders, id])

  return(
    bidder &&
    <div className="bidder-detail">
      <h1>Bidder Details</h1>
      <div className="bidder-details">
        <h2>Bidder #</h2>
      </div>
    </div>
  )
}