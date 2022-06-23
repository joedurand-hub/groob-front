import {memo} from 'react'
import Link from "next/link"

const Posts = ({ data }) => {
  return (
    <article>
      {data.map(({ id, title, body }) => (
            <div key={id}>
              <Link href={`/Posts/${id}`} passHref>
                <a>
                  {id} - {title}
                </a>
              </Link>
              <p>{body}</p>
            </div>
        ))}
    </article>
  );
};

export default memo(Posts);

export async function getStaticProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return {
      props: {
        data
      }
    } 
  } catch(error) {
    console.log(error)
  }
}