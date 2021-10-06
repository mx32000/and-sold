import { Switch, Route, useParams } from "react-router-dom";
import BiddersContainer from "./BiddersContainer";
import DealersContainer from "./DealersContainer";
import LotsContainer from "./LotsContainer";
import AuctionDetail from "../screens/Auctions/AuctionDetail";
import Layout from "../components/Layout";

export default function AuctionContainer() {
  const params = useParams();
  const auctionId = params.auction_id;

  return(
    <Layout signedIn={true} auctionId={auctionId}>
      <div className="auction-container">
        <Switch>
          <Route path="/auctions/:auction_id/bidders">
            <BiddersContainer />
          </Route>
          <Route path="/auctions/:auction_id/dealers">
            <DealersContainer />
          </Route>
          <Route path="/auctions/:auction_id/lots">
            <LotsContainer />
          </Route>
          <Route path="/auctions/:auction_id">
            <AuctionDetail />
          </Route>
        </Switch>
      </div>
    </Layout>
  )
}