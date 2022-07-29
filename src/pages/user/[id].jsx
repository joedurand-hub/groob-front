import Layout from "../../components/Layout/Layout";
import Profile from "../../components/ProfileById/ProfileById";
import NavItem from "../../components/NavItem/NavItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { getCookie } from "cookies-next";

const ProfileById = ({ data }) => {
  const token = getCookie("authToken");
  console.log(data)
  return (
    <Layout
      menuItem={
        <>
          <NavItem path="/menu">
            <GiHamburgerMenu />
          </NavItem>
        </>
      }
    >
      <Profile data={data} token={token} />
    </Layout>
  );
};

export default ProfileById;

export async function getServerSideProps({ req, res, query }) {
  try {
    const token = getCookie("authToken", { req, res });
    const {id} = query;
    console.log("id ", id)
    const response = await fetch(
      `http://localhost:8080/profileById/${id}`,
      {
        headers: {
          authToken: token,
        },
      },
      {
        withCredentials: true,
      }
    );
    const data = await response.json();
    // const user = data.find(obj => obj.user == id);
    console.log(data);
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
