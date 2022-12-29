import Layout from "../../../components/Layout/Layout";
import { getCookie } from "cookies-next";

const Followings = ({ data }) => {
  return (
    <>
      <Layout>
        {data &&
          data.followings.map((userId) => (
            <>
              <h4>id de a quien sigo: {userId}</h4>
            </>
          ))}
      </Layout>
    </>
  );
};

export default Followings;

export async function getServerSideProps({ req, res }) {
  try {
    const token = getCookie("authtoken", { req, res });
    const response = await fetch(
      process.env.NEXT_PUBLIC_REACT_ENV === "development"
        ? `${process.env.API_ENDPOINT_DEVELOPMENT}/followings`
        : `${process.env.API_ENDPOINT_PRODUCTION}/followings`,
      {
        headers: {
          authtoken: token,
        },
      },
      {
        credentials: "include",
      }
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
