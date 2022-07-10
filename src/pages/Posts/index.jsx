import Link from "next/link"
import Menu from '../../components/DropdownMenu/Menu'
import MenuItem from '../../components/DropdownItem/MenuItem'
import Nav from '../../components/Nav/Nav'
import NavItem from '../../components/NavItem/NavItem'

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

export default Posts;

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