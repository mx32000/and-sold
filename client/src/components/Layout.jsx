import Nav from "./Nav";

export default function Layout(props) {
  return(
    <>
      <Nav signedIn={props.signedIn} auctionId={props.auctionId}/>
      {props.children}
    </>
  )
}