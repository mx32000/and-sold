import { Switch, Route, useHistory } from "react-router-dom";
import BidderCreate from "../screens/Bidders/BidderCreate";
import BidderEdit from "../screens/Bidders/BidderEdit";
import BidderDetail from "../screens/Bidders/BidderDetail";
import Bidders from "../screens/Bidders/Bidders";
import { useEffect, useState } from "react";
import { createAuctionBidder, getAuctionBidders } from "../services/bidders";

export default function BiddersContainer(props) {
  const [auctionBidders, setAuctionBidders] = useState([]);
  const { auction } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchBidders = async () => {
      const bidders = await getAuctionBidders(auction.id, true);
      setAuctionBidders(bidders);
    }
    if (auction) {
      fetchBidders();
    }
  }, [auction])

  const handleAddBidder = bidderData => {
    const newBidder = createAuctionBidder(auction.id, bidderData);
    setAuctionBidders(prevState => [...prevState, newBidder]);
    history.push(`/auctions/${auction.id}/bidders/${newBidder.id}`)
  }

  return(
    <div className="bidders-container">
      <Switch>
        <Route path="/auctions/:auction_id/bidders/new">
          <BidderCreate handleAddBidder={handleAddBidder}/>
        </Route>
        <Route path="/auctions/:auction_id/bidders/:id/edit">
          <BidderEdit />
        </Route>
        <Route path="/auctions/:auction_id/bidders/:id">
          <BidderDetail bidders={auctionBidders}/>
        </Route>
        <Route path="/auctions/:auction_id/bidders">
          <Bidders bidders={auctionBidders}/>
        </Route>
      </Switch>
    </div>
  )
}