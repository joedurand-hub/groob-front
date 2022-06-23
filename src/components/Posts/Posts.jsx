import {memo} from 'react'

const Posts = ({data}) => {
  console.log(data)
  return (
    <article>
        {data && data.map(({id, title, body}) => {
          <div key={id}>
            <h3>{id} - {title}</h3>
            <p>{body}</p>
          </div>
        })}
      </article>
  )
}

export default memo(Posts);

export async function getStaticProps() {
  try {
    const res = await axios('https://jsonplaceholder.typicode.com/posts')
    const data = await res.data.json()
    return {
      props: data
    } 
  } catch(error) {
    console.log(error)
  }
}