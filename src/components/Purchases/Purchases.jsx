import useRequest from "../../hooks/useRequest";
import { ENDPOINT } from "../../helpers/constants";
import Posts from "./Post/Post";
import Loader from "../Loader/Loader";

const Purchases = ({myId, publicationsPurchases, myUserExplicitContent}) => {
  const { data, loading, error } = useRequest(`${ENDPOINT}/purchasesByUser`);

  if (loading) {
    <Loader />;
  }
  if (data) {
    return (
      <>
        <Posts data={data} publicationsPurchases={publicationsPurchases} myId={myId} myUserExplicitContent={myUserExplicitContent}/>
      </>
    );
  }
};

export default Purchases;
