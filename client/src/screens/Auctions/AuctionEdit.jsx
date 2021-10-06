import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";

export default function AuctionEdit() {
  const params = useParams();
  const auctionId = params.auction_id;

  return(
    <Layout signedIn={true} auctionId={auctionId}>
      <h1>auction edit</h1>
    </Layout>
  )
}