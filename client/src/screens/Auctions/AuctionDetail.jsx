import { Link } from "react-router-dom";

export default function AuctionDetail(props) {
  const { auction } = props;
  
  return(
    auction &&
    <div className="auction-detail">
      <h1>Auction details</h1>
      <div className="details">
        <h2>{auction.title}</h2>
        <p>Status: {auction.status}</p>
        <p>Organization: {auction.organization}</p>
        <p>Location: {auction.location}</p>
        <p>Dates: {auction.dates}</p>
        <p>Tax rate: {auction.tax_rate}</p>
        <p>Credit card convenience fee: {auction.credit_card_fee}</p>
        <p>Portion of sales collected: {auction.portion_collected}</p>
        <p>Notes: {auction.notes}</p>
        <Link to={`/auctions/${auction.id}/edit`}><button>Edit</button></Link>
      </div>
    </div>
  )
}