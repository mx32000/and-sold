import { Switch, Route } from "react-router-dom";
import AuctionCreate from "../screens/Auctions/AuctionCreate";
import AuctionEdit from "../screens/Auctions/AuctionEdit";
import AuctionContainer from "./AuctionContainer";
import Auctions from "../screens/Auctions/Auctions";

export default function AuctionsContainer(props) {
  return(
    <div class="auctions-container">
      <Switch>
        <Route path="/auctions/new">
          <AuctionCreate />
        </Route>
        <Route path="/auctions/:id/edit">
          <AuctionEdit />
        </Route>
        <Route path="/auctions/:id">
          <AuctionContainer />
        </Route>
        <Route path="/auctions">
          <Auctions />
        </Route>
      </Switch>
    </div>
  )
}