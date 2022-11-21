import useRequest from "../../../hooks/useRequest";
import { ENDPOINT } from "../../../helpers/constants";
import Posts from "../../Post/Post";
import Loader from "../../Loader/Loader";

const Products = ({myId, myUserExplicitContent}) => {
  console.log(myId)
  const { data, loading, error } = useRequest(`${ENDPOINT}/productsByUser/${myId}`);
  if (loading) {
    <Loader />;
  }
  if (data) {
    return (
      <>
        <Posts data={data} myId={myId} myUserExplicitContent={myUserExplicitContent}/>
      </>
    );
  }
};

export default Products;
