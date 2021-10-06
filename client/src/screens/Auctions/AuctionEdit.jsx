import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";

export default function AuctionEdit(props) {
  const params = useParams();
  const auctionId = params.auction_id;

  return(
    <Layout signedIn={true} auctionId={auctionId} handleLogout={props.handleLogout}>
      <h1>auction edit</h1>
    </Layout>
  )
}