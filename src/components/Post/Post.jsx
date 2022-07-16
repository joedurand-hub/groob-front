import Link from "next/link"
import Image from "next/image"
import { URL } from "../../helpers/constants";
const Posts = ({ data }) => {
  if(data) {
    return (
      <div>
      {data && data.map(({ content, image, price, createdAt, user, _id }) => (
            <article key={_id}>
              <h4>El post es del usuario {user}</h4>
              <Link href={`${URL}/Feed/${_id}`} passHref>
                <a>
                  Creado en la fecha: {createdAt}
                </a>
              </Link>
              <h3><strong>{price}</strong></h3>
              <p>{content}</p>
              <Image src={"https://static.pintzap.com/img/pics/t/600/1643629366_senyor-ajudam-no-vull-morir-aqui.jpg"} width={300} height={300} alt="Image"/>
            </article>
        ))}
    </div>
  );
}
};

export default Posts;