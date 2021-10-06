import { Link } from "react-router-dom";

export default function Nav(props) {
  const { signedIn, auctionId, handleLogout } = props;
  return(
    <nav>
      <p>And...Sold!</p>
      <div className="nav">
        {
          !signedIn
            ? (
                <>
                  <Link to="/signin">Sign in</Link>
                  <Link to="/signup">Sign up</Link>
                </>
              )
            : (
              <>
                {
                  props.auctionId &&
                  <>
                    <Link to={`/auctions/${auctionId}`}>Main page</Link>
                    <Link to={`/auctions/${auctionId}/bidders`}>Bidders</Link>
                    <Link to={`/auctions/${auctionId}/dealers`}>Dealers</Link>
                  </>
                }
                <Link to={"/auctions"}>Auctions</Link>
                <button onClick={handleLogout}>Sign out</button>
              </>
            )
        }
      </div>
    </nav>

  )
}