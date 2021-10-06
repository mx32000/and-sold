import { Switch, Route } from "react-router-dom";
import AuctionCreate from "../screens/Auctions/AuctionCreate";
import AuctionEdit from "../screens/Auctions/AuctionEdit";
import AuctionContainer from "./AuctionContainer";
import Auctions from "../screens/Auctions/Auctions";
import { useEffect, useState } from "react";
import { getUserAuctions } from "../services/auctions";

export default function AuctionsContainer(props) {
  const [userAuctions, setUserAuctions] = useState([]);

  useEffect(() => {
    const fetchAuctions = async () => {
      const auctions = await getUserAuctions();
      setUserAuctions(auctions);
    }
    fetchAuctions();
  }, [props.user])

  return(
    <div className="auctions-container">
      <Switch>
        <Route path="/auctions/new">
          <AuctionCreate />
        </Route>
        <Route path="/auctions/:auction_id/edit">
          <AuctionEdit />
        </Route>
        <Route path="/auctions/:auction_id">
          <AuctionContainer />
        </Route>
        <Route path="/auctions">
          <Auctions auctions={userAuctions}/>
        </Route>
      </Switch>
    </div>
  )
}