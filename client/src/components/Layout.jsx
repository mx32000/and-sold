import Nav from "./Nav";

export default function Layout(props) {
  const { signedIn, auctionId, handleLogout } = props;
  return(
    <>
      <Nav signedIn={signedIn} auctionId={auctionId} handleLogout={handleLogout}/>
      {props.children}
    </>
  )
}