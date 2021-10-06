import { Link } from "react-router-dom";

export default function Auction(props) {
  const { title, status, organization, id } = props.auction;
  return(
    <div className="auction">
      <h2>{title}</h2>
      <p>Status: {status}</p>
      <p>Organization: {organization}</p>
      <Link to={`/auctions/${id}`}><button>See details</button></Link>
    </div>
  )
}