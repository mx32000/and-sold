import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";

export default function AuctionEdit(props) {
  const [form, setForm] = useState({
    title: "",
    organization: "",
    location: "",
    dates: "",
    notes: "",
    tax_rate: "",
    credit_card_fee: "",
    portion_collected: "",
    status: ""
  });
  const { auctions, handleLogout } = props
  const params = useParams();
  const auctionId = params.auction_id;
  
  useEffect(() => {
    const prefillForm = () => {
      const auction = auctions.find(auctionItem => auctionItem.id === Number(auctionId))
      const { title, organization, location, dates, notes, tax_rate, credit_card_fee, portion_collected, status } = auction;
      setForm({ title, organization, location, dates, notes, tax_rate, credit_card_fee, portion_collected, status});
    }
    if (auctions.length) {
      prefillForm()
    }
  }, [auctions, auctionId])
  
  const handleChange = e => {
    const { name, value } = e.target;
    const numberInputs = ["tax_rate", "credit_card_fee", "portion_collected"];
    setForm(prevState => (numberInputs.includes(name) ? 
      { ...prevState, [name]: value === "" ? "" : Number(value)} : 
      { ...prevState, [name]: value }
    ));
  }
  
  const { title, organization, location, dates, notes, tax_rate, credit_card_fee, portion_collected, status } = form;

  return(
    <Layout signedIn={true} auctionId={auctionId} handleLogout={handleLogout}>
      {
        <div className="auction-create">
          <h1>Enter auction details</h1>
          <form>
            <div className="description details">
              <label htmlFor="title">Title</label>
              <input 
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
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      }
    </Layout>
  )
}