import { Link } from "react-router-dom";
import Auction from "../../components/Auction";

export default function Auctions(props) {
  return(
    <div className="auctions">
      {
        props.auctions.length ? (
          <>
            <h1>Your auctions</h1>
            {
              props.auctions.map(auction => <Auction auction={auction} key={auction.id}/>)
            }
          </>
        ) : (
          <>
            <p>Looks like you don't have any auctions yet.</p>
            <Link to="/auctions/new"><button>Create an auction!</button></Link>
          </>
        )
      }
    </div>
  )
}