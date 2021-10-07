import { Switch, Route, useHistory } from "react-router-dom";
import AuctionCreate from "../screens/Auctions/AuctionCreate";
import AuctionEdit from "../screens/Auctions/AuctionEdit";
import AuctionContainer from "./AuctionContainer";
import Auctions from "../screens/Auctions/Auctions";
import { useEffect, useState } from "react";
import { createAuction, getUserAuctions } from "../services/auctions";
import Layout from "../components/Layout";

export default function AuctionsContainer(props) {
  const [userAuctions, setUserAuctions] = useState([]);
  const { user, handleLogout } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchAuctions = async () => {
      const auctions = await getUserAuctions();
      setUserAuctions(auctions);
    }
    fetchAuctions();
  }, [props.user])

  if (!user) return <Layout />

  const handleCreateAuction = async auctionData => {
    const newAuction = await createAuction(auctionData);
    setUserAuctions(prevState => [...prevState, newAuction]);
    history.push(`/auctions/${newAuction.id}`);
  }

  return(
    <div className="auctions-container">
      <Switch>
        <Route path="/auctions/new">
          <Layout signedIn={true} handleLogout={handleLogout}>
            <AuctionCreate handleCreateAuction={handleCreateAuction}/>
          </Layout>
        </Route>
        <Route path="/auctions/:auction_id/edit">
          <AuctionEdit handleLogout={handleLogout} auctions={userAuctions}/>
        </Route>
        <Route path="/auctions/:auction_id">
          <AuctionContainer handleLogout={handleLogout}/>
        </Route>
        <Route path="/auctions">
          <Layout signedIn={true} handleLogout={handleLogout}>
            <Auctions auctions={userAuctions}/>
          </Layout>
        </Route>
      </Switch>
    </div>
  )
}