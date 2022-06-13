import { memo } from 'react'
import useRequest from "../../hooks/useRequest";
import Switch from '../Switch/Switch';

let url = "http://localhost:8080/profile";

const User = () => {
  if (typeof window !== "undefined") {
    let token = window.localStorage.getItem("token");
    const { data, loading, error } = useRequest(url, token);

    return (
      <div>
        { loading && <p>Loading...</p> }
        { error && <p>Error: no se pudo traer la info...</p> }
        {!loading && data && (
          <div>
            <span>{data?.username}</span>
            <div>
              <span>
                {data && data.followings?.length === 0
                  ? 0
                  : data.followings?.length}
              </span>
              <span>Followings</span>
            </div>

            <div>
              <span>
                {data && data.followers?.length === 0
                  ? 0
                  : data.followers?.length}
              </span>
              <span>Followers</span>
            </div>
            {/* <Image src="/foto1.jpg" alt="" width={500} height={500} /> */}
          </div>
        )}
        <br />
        <Switch/>
      </div>
    );
  }
};

export default memo(User);
