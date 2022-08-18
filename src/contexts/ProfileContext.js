import { createContext, useEffect, useState } from "react";
import useRequest from "../hooks/useRequest";
import { ENDPOINT, GET_PROFILE } from "../helpers/constants";
const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
    
    const {data , loading, error} = useRequest(`${ENDPOINT}${GET_PROFILE}/reduced`)
    const profile = data

    return (
    <ProfileContext.Provider value={{ profile, loading, error }}>
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };