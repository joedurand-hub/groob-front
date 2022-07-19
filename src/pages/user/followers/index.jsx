import Layout from "../../../components/Layout/Layout";

const Followers = ({data}) => {

  console.log(data);
  return (
    <Layout>
      {data &&
        data.followers.map((userId) => (
          <>
            <h4>id de mi seguidor: {userId}</h4>
          </>
        ))}
    </Layout>
  );
};

export default Followers;

export async function getServerSideProps({ req, res }) {
  try {
    const response = await fetch(`http://localhost:8080/followers`);
    const data = await response.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.table(error);
  }
}
