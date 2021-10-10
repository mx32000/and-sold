import React from "react";
import { Link, useParams } from "react-router-dom"
import Button from "../../components/Button";
import "../../assets/screens/Bidders/Bidders.css"

export default function Bidders(props) {
  const { bidders } = props;
  const params = useParams();
  const auctionId = params.auction_id;
  const columns = [
    { title: "Number", attribute: "number" },
    { title: "Name", attribute: "name" },
    { title: "Phone number", attribute: "phone_number" },
    { title: "Tax-exempt?", attribute: "tax_exempt", boolean: true },
    { title: "Bought lots?" },
    { title: "" }
  ]

  const convertBoolean = bool => bool ? "Yes" : "No";

  return(
    <div className="bidders">
      <h1>Bidders</h1>
      <Link to={`/auctions/${auctionId}/bidders/new`}><Button text="Add a bidder" /></Link>
      {
        props.bidders.length > 0 &&
        <div className="bidders-list">
          <>
            { 
              columns.map( column => (
                <div className={`heading ${column.attribute || "lots"} odd-row`} key={column.title}>
                  {column.title}
                </div>
              )) 
            }
          </>
          {
            bidders.map((bidder,index) => (
              <React.Fragment key={`row${bidder.id}`}>
                {
                  columns.map(column => 
                    <div className={`data ${column.title ? (column.attribute || "lots") : "view"} ${index % 2 === 0 ? "even-row" : "odd-row"}`} key={`${column.title}${bidder.id}`}>
                      <div>
                        {
                          column.title 
                          ? (column.attribute
                            ? (column.boolean ? convertBoolean(bidder[column.attribute]) : bidder[column.attribute])
                            : convertBoolean(bidder.lots.length > 0))
                          : <Link to={`/auctions/${auctionId}/bidders/${bidder.id}`}><Button text="View" /></Link>
                        }
                      </div>
                    </div>
                  )
                }
              </React.Fragment>
            ))
          }
        </div>
      }
    </div>
  )
}