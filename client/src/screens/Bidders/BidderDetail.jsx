import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../assets/screens/Bidders/BidderDetail.css";

export default function BidderDetail(props) {
  const [bidder, setBidder] = useState(null);
  const { bidders } = props;
  const { auction_id, id } = useParams();

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
      <div className="bidder-details-container">
        <div className="bidder-details">
          <h2>Bidder #{bidder.number} - {bidder.name}</h2>
          <p>Phone: {bidder.phone_number}</p>
          <p>Address: {bidder.address}</p>
          <p>Email: {bidder.email}</p>
          <p>{bidder.tax_exempt ? "Tax-exempt" : "Not tax-exempt"}</p>
          <Link to={`/auctions/${auction_id}/bidders/${id}/edit`}><button>Edit</button></Link>
        </div>
        <div className="bidder-lots">
          <h4>Lots</h4>
          {bidder.lots.length 
            ? bidder.lots.map(lot => 
              <p key={lot.id}>{lot.number} - {lot.description} - ${lot.price.toFixed(2)}</p>
            ) : <p>This bidder has not purchased lots</p>}
        </div>
      </div>
    </div>
  )
}