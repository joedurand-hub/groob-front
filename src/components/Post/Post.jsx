import Link from "next/link"

const Posts = ({ data }) => {
  return (
    <div>
      {data && data.map(({ content, createdAt, user, _id }) => (
            <article key={_id}>
              <h4>El post es del usuario {user}</h4>
              <Link href={`http://localhost:3000/feed/${_id}`} passHref>
                <a>
                  Creado en la fecha: {createdAt}
                </a>
              </Link>
              <p>{content}</p>
            </article>
        ))}
    </div>
  );
};

export default Posts;