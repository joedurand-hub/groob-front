import {useEffect} from "react";
import { useRouter } from "next/router";
import Loader from "../../Loader/Loader";
import useAuthPost from "../../../hooks/useAuthPost";
import { ENDPOINT } from "../../../helpers/constants";
import { BsCashCoin } from "react-icons/bs";

const Buy = ({
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
        userName: userName,
        postId: postId,
        creatorId: creatorId,
        price: price,
        descripcion: descripcion,
        profilePicture: picUrl,
        quantity: 1,
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
        <BsCashCoin onClick={handlePreference}/>
      )}
    </>
  )
};

export default Buy;
