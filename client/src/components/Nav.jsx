import { Link } from "react-router-dom";
import "../assets/components/Nav.css";

export default function Nav(props) {
  const { signedIn, auctionId, handleLogout } = props;
  return(
    <nav>
      <p className="logo">And...Sold!</p>
      <div className="nav">
        {
          !signedIn
            ? (
                <>
                  <Link className="link" to="/signin">Sign in</Link>
                  <Link className="link" to="/signup">Sign up</Link>
                </>
              )
            : (
              <>
                {
                  props.auctionId &&
                  <>
                    <Link className="link" to={`/auctions/${auctionId}`}>Main page</Link>
                    <Link className="link optional" to={`/auctions/${auctionId}/bidders`}>Bidders</Link>
                    <Link className="link optional" to={`/auctions/${auctionId}/dealers`}>Dealers</Link>
                  </>
                }
                <Link className="link" to={"/auctions"}>Auctions</Link>
                <button className="link" onClick={handleLogout}>Sign out</button>
              </>
            )
        }
      </div>
    </nav>

  )
}