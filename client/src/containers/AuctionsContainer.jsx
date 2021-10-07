import { Switch, Route, useHistory } from "react-router-dom";
import AuctionCreate from "../screens/Auctions/AuctionCreate";
import AuctionEdit from "../screens/Auctions/AuctionEdit";
import AuctionContainer from "./AuctionContainer";
import Auctions from "../screens/Auctions/Auctions";
import { useEffect, useState } from "react";
import { createAuction, editAuction, getUserAuctions, removeAuction } from "../services/auctions";
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
    if (user) {
      fetchAuctions();
    }
  }, [user])

  if (!user) return <Layout />

  const handleCreateAuction = async auctionData => {
    const newAuction = await createAuction(auctionData);
    setUserAuctions(prevState => [...prevState, newAuction]);
    history.push(`/auctions/${newAuction.id}`);
  }

  const handleEditAuction = async (id, auctionData) => {
    const updatedAuction = await editAuction(id, auctionData);
    setUserAuctions(prevState => prevState.map(auction => auction.id === Number(id) ? updatedAuction : auction));
    history.push(`/auctions/${updatedAuction.id}`)
  }

  const handleRemoveAuction = async id => {
    await removeAuction(id);
    setUserAuctions(prevState => prevState.filter(auction => auction.id !== Number(id)));
    history.push("/auctions");
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
          <AuctionEdit handleLogout={handleLogout} auctions={userAuctions} handleEditAuction={handleEditAuction}/>
        </Route>
        <Route path="/auctions/:auction_id">
          <AuctionContainer handleLogout={handleLogout} handleRemoveAuction={handleRemoveAuction}/>
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