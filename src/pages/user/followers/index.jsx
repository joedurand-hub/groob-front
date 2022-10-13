import Layout from "../../../components/Layout/Layout";

const Followers = ({data}) => {

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
    const response = await fetch(`https://groob-backend-production.up.railway.app/followers`);
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
