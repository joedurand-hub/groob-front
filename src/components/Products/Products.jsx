import useRequest from "../../hooks/useRequest";
import { ENDPOINT } from "../../helpers/constants";
import Posts from "../Post/Post";
import Loader from "../Loader/Loader";

const Products = ({ myId, myUserExplicitContent }) => {
  const { data, loading, error } = useRequest(`${ENDPOINT}/productsByUser`);
  if (loading) {
    return (
      <Loader />
    )
  }

  if (data && data.length === 0) {
    return (
      <>
        <p>Aún no has publicado exclusivos</p>
      </>
    )
  }

  if (data) {
    return (
      <>
        <Posts data={data} myId={myId} myUserExplicitContent={myUserExplicitContent} />
      </>
    )
  }

  if (error) {
    return (
      <div>
        <p>Se produjo un error. Volvé a intentarlo.</p>
      </div>
    )
  }
};

export default Products;
