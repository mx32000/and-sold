import { Switch, Route } from "react-router-dom";
import BidderCreate from "../screens/Bidders/BidderCreate";
import BidderEdit from "../screens/Bidders/BidderEdit";
import BidderDetail from "../screens/Bidders/BidderDetail";
import Bidders from "../screens/Bidders/Bidders";

export default function BiddersContainer() {
  return(
    <Switch>
      <Route path="/auctions/:auction_id/bidders/new">
        <BidderCreate />
      </Route>
      <Route path="/auctions/:auction_id/bidders/:id/edit">
        <BidderEdit />
      </Route>
      <Route path="/auctions/:auction_id/bidders/:id">
        <BidderDetail />
      </Route>
      <Route path="/auctions/:auction_id/bidders">
        <Bidders />
      </Route>
    </Switch>
  )
}