import { Switch, Route, useHistory } from "react-router-dom";
import BidderCreate from "../screens/Bidders/BidderCreate";
import BidderEdit from "../screens/Bidders/BidderEdit";
import BidderDetail from "../screens/Bidders/BidderDetail";
import Bidders from "../screens/Bidders/Bidders";
import { useEffect, useState } from "react";
import { createAuctionBidder, editAuctionBidder, getAuctionBidders } from "../services/bidders";

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

  const handleCreateBidder = async bidderData => {
    const newBidder = await createAuctionBidder(auction.id, bidderData);
    setAuctionBidders(prevState => [...prevState, newBidder]);
    history.push(`/auctions/${auction.id}/bidders/${newBidder.id}`)
  }

  const handleEditBidder = async (id, bidderData) => {
    const updatedBidder = await editAuctionBidder(auction.id, id, bidderData);
    setAuctionBidders(prevState => {
      prevState.filter(auctionBidder => auctionBidder.id === Number(id) ? updatedBidder : auctionBidder)
    });
    history.push(`/auctions/${auction.id}/bidders/${updatedBidder.id}`)
  }

  return(
    <div className="bidders-container">
      <Switch>
        <Route path="/auctions/:auction_id/bidders/new">
          <BidderCreate handleCreateBidder={handleCreateBidder}/>
        </Route>
        <Route path="/auctions/:auction_id/bidders/:id/edit">
          <BidderEdit bidders={auctionBidders} handleEditBidder={handleEditBidder}/>
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