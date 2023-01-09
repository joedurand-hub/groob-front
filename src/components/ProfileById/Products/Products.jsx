import useRequest from "../../../hooks/useRequest";
import { ENDPOINT } from "../../../helpers/constants";
import Posts from "../../Post/Post";
import Loader from "../../Loader/Loader";

const Products = ({ myId, myUserExplicitContent }) => {
  const { data, loading, error } = useRequest(`${ENDPOINT}/productsByUser/${myId}`);
  if (loading) {
    <Loader />;
  }
  if (data && data.length === 0) {
    return (
      <>
        <p>Aún no ha publicado exclusivos.</p>
      </>
    );
  }
  if (data) {
    return (
      <>
        <Posts data={data} myId={myId} myUserExplicitContent={myUserExplicitContent} />
      </>
    );
  }
  if (error) {
    return (
      <>
        <p>¡Ups! Hubo un error, volvé a intentarlo.</p>
      </>
    );
  }
};

export default Products;
