import { Switch, Route } from "react-router-dom";
import DealerCreate from "../screens/Dealers/DealerCreate";
import DealerDetail from "../screens/Dealers/DealerDetail";
import DealerEdit from "../screens/Dealers/DealerEdit";
import Dealers from "../screens/Dealers/Dealers";

export default function DealersContainer() {
  return(
    <div className="dealers-container">
      <Switch>
        <Route path="/auctions/:auction_id/dealers/new">
          <DealerCreate />
        </Route>
        <Route path="/auctions/:auction_id/dealers/:id/edit">
          <DealerEdit />
        </Route>
        <Route path="/auctions/:auction_id/dealers/:id">
          <DealerDetail />
        </Route>
        <Route path="/auctions/:auction_id/dealers">
          <Dealers />
        </Route>
      </Switch>
    </div>
  )
}