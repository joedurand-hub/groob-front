import useRequest from "../../hooks/useRequest";
import { ENDPOINT } from "../../helpers/constants";
import Posts from "./Post/Post";
import Loader from "../Loader/Loader";

const Purchases = ({ myId, publicationsPurchases, myUserExplicitContent }) => {
  const { data, loading, error } = useRequest(`${ENDPOINT}/purchasesByUser`);

  if (loading) {
    <Loader />;
  }
  if (data && data.length === 0) {
    return (
      <>
        <p>Esta sección es privada, nadie más puede verla.</p>
        <p>Aún no has realizado compras</p>
      </>
    )
  }

  if (data && data.length > 0) {
    return (
      <>
        <Posts data={data} publicationsPurchases={publicationsPurchases} myId={myId} myUserExplicitContent={myUserExplicitContent} />
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

export default Purchases;
