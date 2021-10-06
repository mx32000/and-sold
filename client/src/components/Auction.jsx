export default function Auction(props) {
  const { title, status, organization } = props.auction;
  return(
    <div className="auction">
      <h2>{title}</h2>
      <p>Status: {status}</p>
      <p>Organization: {organization}</p>
    </div>
  )
}