import { useState } from "react"
import Button from "../../components/Button";
import "../../assets/screens/Auctions/AuctionCreate.css";

export default function AuctionCreate(props) {
  const [form, setForm] = useState({
    title: "",
    organization: "",
    location: "",
    dates: "",
    notes: "",
    tax_rate: "",
    credit_card_fee: "",
    portion_collected: ""
  })
  
  const {title, organization, location, dates, notes, tax_rate, credit_card_fee, portion_collected} = form;

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevState => ({ ...prevState, [name]: value}));
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.handleCreateAuction({ ...form, status: "upcoming"});
  }

  return(
    <div className="auction-create">
      <h1>Enter auction details</h1>
      <form onSubmit={handleSubmit}>
        <div className="description details">
          <label htmlFor="title">Title</label>
          <input
            required
            type="text"
            name="title"
            id="title"
            value={title}
            placeholder="Auction Title"
            onChange={handleChange}
          />
          <label htmlFor="organization">Organization Name</label>
          <input 
            type="text"
            name="organization"
            id="organization"
            value={organization}
            placeholder="Organization Name"
            onChange={handleChange}
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={location}
            placeholder="123 Main St"
            onChange={handleChange}
          />
          <label htmlFor="dates">When is the auction?</label>
          <textarea
            name="dates"
            id="dates"
            value={dates}
            placeholder="Saturday, October 9, 9:00am-7:00pm and Sunday, October 10, 9:00am-3:00pm"
            onChange={handleChange}
          />
          <label htmlFor="notes">Notes</label>
          <textarea
            name="notes"
            id="notes"
            value={notes}
            placeholder="Write any notes you wish to include in the description"
            onChange={handleChange}
          />
        </div>
        <div className="financial details">
          <h2>Let's talk money</h2>
          <label htmlFor="tax_rate">Tax rate</label>
          <input
            type="number"
            name="tax_rate"
            id="tax_rate"
            value={tax_rate}
            placeholder=".07"
            onChange={handleChange}
          />
          <label htmlFor="credit_card_fee">Credit card convenience fee</label>
          <input
            type="number"
            name="credit_card_fee"
            id="credit_card_fee"
            value={credit_card_fee}
            placeholder=".0275"
            onChange={handleChange}
          />
          <label htmlFor="portion_collected">Portion of sales collected</label>
          <input
            type="number"
            name="portion_collected"
            id="portion_collected"
            value={portion_collected}
            placeholder=".10"
            onChange={handleChange}
          />
          <Button text="Submit" />
        </div>
      </form>
    </div>
  )
}