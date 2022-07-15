import { API, GET_PROFILE } from "../../helpers/constants";

const ProfileById = ({ data }) => {
  return (
    <article>
      {/* <h3>
        {data.id} - {data.title}
      </h3>
      <p>{data.body}</p> */}
    </article>
  );
};

export default ProfileById;

export async function getStaticPaths() {
  try {
    const response = await fetch('`${API}${GET_PROFILE}`') 
    const data = await response.json()
    const paths = data.map(obj => ({ params: { id: `${obj._id}` } }));
    console.log(paths)
    return {
      paths,
      fallback: true,
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  try {
    const response = await fetch(
      `${API}${GET_PROFILE}/${params.id}`);
    const data = await response.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
