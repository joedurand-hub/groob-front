import { useState, useEffect } from "react";
import useRequest from "../../hooks/useRequest";
import { ENDPOINT } from "../../helpers/constants";
import Posts from "../Post/Post";
import Loader from "../Loader/Loader";

const Purchases = () => {
  const { data, loading, error } = useRequest(`${ENDPOINT}/purchasesByUser`);

  if (loading) {
    <Loader />;
  }

  if (data) {
    return (
      <>
        <Posts data={data} />
      </>
    );
  }
};

export default Purchases;
