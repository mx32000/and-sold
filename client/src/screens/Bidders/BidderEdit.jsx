import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function BidderEdit(props) {
  const [bidderNumber, setBidderNumber] = useState(null);
  const [form, setForm] = useState({
    name: "",
    phone_number: "",
    address: "",
    email: "",
    tax_exempt: false
  })
  const { bidders, handleEditBidder } = props;
  const params = useParams();
  const { id } = params;
  const { name, phone_number, address, email, tax_exempt } = form;

  useEffect(() => {
    const prefillFormData = () => {
      const auctionBidder = bidders.find(bidder => bidder.id === Number(id));
      setBidderNumber(auctionBidder.number);
      setForm(auctionBidder);
    }
    if (bidders.length) {
      prefillFormData();
    }
  }, [bidders, id])

  const booleanize = str => str === "true" ? true : false;

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevState => ({ ...prevState, [name]: name === "tax_exempt" ? booleanize(value) : value}));
  }

  const handleSubmit = e => {
    e.preventDefault();
    handleEditBidder(id, form);
  }

  return (
    bidderNumber &&
    <div className="bidder-edit">
      <h1>Edit bidder details - #{bidderNumber} </h1>
      <form onSubmit={handleSubmit}>
        <div className="col1 details">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Rocky Smith"
            value={name}
            onChange={handleChange}
          />
          <label htmlFor="phone_number">Phone number</label>
          <input
            type="text"
            name="phone_number"
            id="phone_number"
            placeholder="555-555-5555"
            value={phone_number}
            onChange={handleChange}
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            value={address}
            placeholder="123 Main St, Townsville, IA 52404"
            onChange={handleChange}
          />
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            placeholder="rocky.smith@email.com"
            onChange={handleChange}
          />
        </div>
        <div className="col2 details">
          <label htmlFor="tax_exempt">Tax-exempt?</label>
          <select name="tax_exempt" id="tax_exempt" value={tax_exempt} onChange={handleChange}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}