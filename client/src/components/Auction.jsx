import { Link } from "react-router-dom";
import Button from "./Button";
import "../assets/components/Auction.css"

export default function Auction(props) {
  const { title, status, organization, id } = props.auction;
  return(
    <div className="auction">
      <h2>{title}</h2>
      <p>Status: {status}</p>
      <p>Organization: {organization}</p>
      <Link to={`/auctions/${id}`}><Button text="See details" /></Link>
    </div>
  )
}