import Layout from "../../../components/Layout/Layout";

const Followers = ({ data }) => {
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
    const response = await fetch(
      process.env.NEXT_PUBLIC_REACT_ENV === "development"
        ? `${process.env.API_ENDPOINT_DEVELOPMENT}/followers`
        : `${process.env.API_ENDPOINT_PRODUCTION}/followers`
    );
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
