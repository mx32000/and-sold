import { Switch, Route } from "react-router-dom";
import BiddersContainer from "./BiddersContainer";
import DealersContainer from "./DealersContainer";
import LotsContainer from "./LotsContainer";
import AuctionDetail from "../screens/Auctions/AuctionDetail";

export default function AuctionContainer() {
  return(
    <div className="auction-container">
      <Switch>
        <Route path="/auctions/:id/bidders">
          <BiddersContainer />
        </Route>
        <Route path="/auctions/:id/dealers">
          <DealersContainer />
        </Route>
        <Route path="/auctions/:id/lots">
          <LotsContainer />
        </Route>
        <Route path="/auctions/:id">
          <AuctionDetail />
        </Route>
      </Switch>
    </div>
  )
}