export default function AuctionDetail(props) {
  const { auction } = props;
  const { title, status, organization, location, dates, notes } = auction;
  return(
    <div className="auction-detail">
      <h1>Auction details</h1>
      <div className="details">
        <h2>{title}</h2>
        <p>Status: {status}</p>
        <p>Organization: {organization}</p>
      </div>
    </div>
  )
}