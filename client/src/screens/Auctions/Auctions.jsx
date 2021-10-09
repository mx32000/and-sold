import { Link } from "react-router-dom";
import Auction from "../../components/Auction";
import Button from "../../components/Button";
import "../../assets/screens/Auctions/Auctions.css"

export default function Auctions(props) {
  return(
    props.auctions.length ? (
      <div className="auctions nonempty">
        <h1 class="title">Your auctions</h1>
        {
          props.auctions.map(auction => <Auction auction={auction} key={auction.id}/>)
        }
        <p className="add-text">Have another auction to add?</p>
        <Link to="/auctions/new"><Button text="Add an auction" /></Link>
      </div>
    ) : (
      <div className="auctions empty">
        <p className="title">Looks like you don't have any auctions yet.</p>
        <Link className="big-create" to="/auctions/new"><Button text="Create an auction!" /></Link>
      </div>
    )
  )
}