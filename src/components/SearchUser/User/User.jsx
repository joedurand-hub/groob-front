import React from "react";
import styles from "./user.module.css";
import Link from "next/link";
import Image from "next/image";

const User = ({ data, index }) => {
  return (
    <Link href={`/data/${data._id}`} passHref>
      <li key={index}>
        <div>
          <Image
            src={data.profilePicture.secure_url}
            width={50}
            height={50}
            alt={`Foto de perfil de ${data.dataName}`}
          />
          <h4>
            <strong>{data.userName}</strong>
          </h4>
        </div>
      </li>
    </Link>
  );
};

export default User;
