import {useEffect} from "react";
import { useRouter } from "next/router";
import useAuthPost from "../../hooks/useAuthPost";
import Button from "../Button/Button";
import { ENDPOINT } from "../../helpers/constants";
import Loader from "../Loader/Loader";

const CreatePreference = ({
  explicitContent,
  creatorId,
  userName,
  postId,
  price,
  descripcion,
  picUrl,
}) => {
  const { data, pending, error, sendData } = useAuthPost();
  const router = useRouter();

  const handlePreference = async () => {
    sendData({
      endpoint: `${ENDPOINT}/preferenceProduct`,
      postData: {
        postId: postId,
        creatorId: creatorId,
        title: userName,
        price: price,
        descripcion: descripcion,
        picURL: picUrl,
        quantity: 9999,
      },
    });
  };

  useEffect(() => {
    data !== undefined && router.push(data.body.init_point)
  }, [data]);

  return (
    <>
      {pending ? (
        <Loader />
      ) : (
        <Button name="Comprar" variant="purchase" onClick={handlePreference} />
      )}
    </>
  );
};

export default CreatePreference;
