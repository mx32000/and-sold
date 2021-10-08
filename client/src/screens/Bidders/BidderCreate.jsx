import { useState } from "react"
import { useParams } from "react-router-dom"

export default function BidderCreate() {
  const [form, setForm] = useState({
    name: "",
    phone_number: "",
    address: "",
    email: "",
    tax_exempt: false
  })

  const { name, phone_number, address, email_address, tax_exempt } = form;

  const booleanize = str => str === "true" ? true : false;

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevState => ({ ...prevState, [name]: name === "tax_exempt" ? booleanize(value) : value}));
  }

  return(
    <div className="bidder-create">
      <h1>Register bidder</h1>
      <form>
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
            placeholder="123 Main St, Townsville, IA 52404"
            onChange={handleChange}
          />
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="rocky.smith@email.com"
            onChange={handleChange}
          />
        </div>
        <div className="col2 details">
          <select name="tax_exempt" id="tax_exempt" value={tax_exempt} onChange={handleChange}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
      </form>
    </div>
  )
}