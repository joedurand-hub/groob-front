import React from "react";
import styles from "./user.module.css";
import Link from "next/link";
import Image from "next/image";

const User = ({ data}) => {
  return (
      <Link href={`/user/${data._id}`} passHref>
        <li>
          <div className={styles.users_found}>
            <Image
              className={styles.users_profile}
              src={data.profilePicture.secure_url}
              width={65}
              height={65}
              alt={`Foto de perfil de ${data.dataName}`}
            />
            <h4 className={styles.users_userName}>
              <strong>
                {data.userName[0].toUpperCase() + data.userName.substring(1)}
              </strong>
            </h4>
          </div>
        </li>
      </Link>
  );
};

export default User;
