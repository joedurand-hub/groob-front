import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "axios";


let url = "http://localhost:8080/profile"

const ProfileUser = () => {
  
  const [userData, setUserData] = useState("")

  const handleProfileUser = async () => {
    let token = window.localStorage.getItem("token");
    const { data } = await axios.get(`${url}`, {
      headers: {
        "auth-token": `${JSON.parse(token)}`,
      },
    });
    setUserData(data);
    return data;
  };

  useEffect(() => {
    handleProfileUser()
  }, [])
  console.log("datos del usuario:", userData)
  const ProfilePage = true;
  if(userData != undefined) {

  return (
    <div >
      <div >
        <span>{userData?.username}</span>
        <span>Senior UI/UX Designer</span>
      </div>

      <div >
        <hr />
        <div>
          <div >
            <span>{userData && userData.followings?.length === 0 ? 0 : userData.followings?.length}</span>
            <span>Followings</span>
          </div>
          {ProfilePage && (
            <>
              <div ></div>
              <div Name="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
          <div >
            <span>{userData && userData.followers?.length === 0 ? 0 : userData.followers?.length}</span>
            <span>Followers</span>
          </div>
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
      <div >
        <Image src="/foto1.jpg" alt="" width={500} height={500} />
      </div>
    </div>
  );
};
}
export default ProfileUser;
