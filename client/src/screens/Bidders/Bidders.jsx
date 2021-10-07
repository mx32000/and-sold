import { Link, useParams } from "react-router-dom"

export default function Bidders(props) {
  const { bidders } = props;
  const params = useParams();
  const auctionId = params.auction_id;
  const columns = [
    { title: "Number", attribute: "number" },
    { title: "Name", attribute: "name" },
    { title: "Phone number", attribute: "phone_number" },
    { title: "Tax-exempt?", attribute: "tax_exempt", boolean: true },
    { title: "Bought lots?" }
  ]

  const convertBoolean = bool => bool ? "Yes" : "No";

  return(
    <div className="bidders">
      <h1>Bidders</h1>
      <Link to={`/auctions/${auctionId}/bidders/new`}><button>Add a bidder</button></Link>
      {
        props.bidders.length &&
        <div className="bidders-list">
          <div className="row">
            { 
              columns.map( column => <div className="heading" key={column.title}>{column.title}</div>) 
            }
          </div>
          {
            bidders.map(bidder => (
              <div className="row" key={bidder.id}>
                {
                  columns.map( column => 
                  <div className="data" key={`${column.title}${bidder.id}`}>
                    {
                      column.attribute
                        ? (column.boolean ? convertBoolean(bidder[column.attribute]) : bidder[column.attribute])
                        : convertBoolean(bidder.lots.length > 0)
                    }
                  </div>)
                }
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}