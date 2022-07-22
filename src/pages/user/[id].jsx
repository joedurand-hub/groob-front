import Layout from "../../components/Layout/Layout";
import Profile from "../../components/ProfileById/ProfileById";
import NavItem from "../../components/NavItem/NavItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { getCookie } from "cookies-next";

const ProfileById = ({data}) => {
  const token = getCookie("authToken");
   return (
      <Layout
      menuItem={
        <>
          <NavItem path="/menu">
            <GiHamburgerMenu />
          </NavItem>
        </>
      }>
      <Profile data={data} token={token} />
    </Layout>
  );
};

export default ProfileById;

export async function getStaticPaths() {
  try {
    const response = await fetch('http://localhost:8080/profiles') 
    const data = await response.json()
    const paths = data.map(obj => ({ params: { id: `${obj._id}` } }));

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
      `http://localhost:8080/profile/${params.id}`);
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
