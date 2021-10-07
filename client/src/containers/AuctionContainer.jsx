import { Switch, Route, useParams } from "react-router-dom";
import BiddersContainer from "./BiddersContainer";
import DealersContainer from "./DealersContainer";
import LotsContainer from "./LotsContainer";
import AuctionDetail from "../screens/Auctions/AuctionDetail";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { getAuction } from "../services/auctions";

export default function AuctionContainer(props) {
  const [auction, setAuction] = useState(null);
  const params = useParams();
  const auctionId = params.auction_id;
  const { handleLogout, handleRemoveAuction } = props;

  useEffect(() => {
    const fetchAuction = async () => {
      const auction = await getAuction(auctionId);
      setAuction(auction);
    }
    fetchAuction();
  }, []);

  return(
    <Layout signedIn={true} auctionId={auctionId} handleLogout={handleLogout}>
      <div className="auction-container">
        <Switch>
          <Route path="/auctions/:auction_id/bidders">
            <BiddersContainer auction={auction}/>
          </Route>
          <Route path="/auctions/:auction_id/dealers">
            <DealersContainer auction={auction}/>
          </Route>
          <Route path="/auctions/:auction_id/lots">
            <LotsContainer auction={auction}/>
          </Route>
          <Route path="/auctions/:auction_id">
            <AuctionDetail auction={auction} handleRemoveAuction={handleRemoveAuction}/>
          </Route>
        </Switch>
      </div>
    </Layout>
  )
}