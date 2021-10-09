import Nav from "./Nav";
import "../assets/components/Layout.css"

export default function Layout(props) {
  const { signedIn, auctionId, handleLogout } = props;
  return(
    <>
      <Nav signedIn={signedIn} auctionId={auctionId} handleLogout={handleLogout}/>
      <div className="main">
        {props.children}
      </div>
    </>
  )
}