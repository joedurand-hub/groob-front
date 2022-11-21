import useRequest from "../../hooks/useRequest";
import { ENDPOINT } from "../../helpers/constants";
import Posts from "../Post/Post";
import Loader from "../Loader/Loader";

const Products = ({myId, myUserExplicitContent}) => {
  const { data, loading, error } = useRequest(`${ENDPOINT}/productsByUser`);
  console.log(data)
  console.log(error)
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
