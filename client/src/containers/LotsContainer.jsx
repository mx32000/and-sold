import { Switch, Route } from "react-router-dom";
import LotCreate from "../screens/Lots/LotCreate";
import LotDetail from "../screens/Lots/LotDetail";
import LotEdit from "../screens/Lots/LotEdit";
import Lots from "../screens/Lots/Lots";

export default function LotsContainer() {
  return(
    <div className="lots-container">
      <Switch>
        <Route path="/auctions/:auction_id/lots/new">
          <LotCreate />
        </Route>
        <Route path="/auctions/:auction_id/lots/:id/edit">
          <LotEdit />
        </Route>
        <Route path="/auctions/:auction_id/lots/:id">
          <LotDetail />
        </Route>
        <Route path="/auctions/:auction_id/lots">
          <Lots />
        </Route>
      </Switch>
    </div>
  )
}