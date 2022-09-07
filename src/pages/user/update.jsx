import { useEffect, useReducer } from "react";
import { ENDPOINT, UPDATE_PROFILE } from "../../helpers/constants";
import { getCookie } from "cookies-next";
import Layout from "../../components/Layout/Layout";
import usePut from "../../hooks/usePut";
import Profile from "../../components/PutProfile/PutProfile";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/router";

const UpdateProfile = ({ data }) => {
  const router = useRouter();
  const token = getCookie("authToken");
  const url = `${ENDPOINT}${UPDATE_PROFILE}/${data?._id}`;
  const { info, pending, error, sendUpdatedData } = usePut();
  console.log(info)


  useEffect(() => {
    if(info !== undefined && info.message) {
      toast.success("Perfil actualizado!", {
        position: "top-center",
        autoClose: "3000",
      })
      router.push('/user') 
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info])


  const initialState = {
    profilePicture: data.profilePicture,
    description: data.description,
    firstName: data.firstName,
    lastName: data.lastName,
    userName: data.userName,
    email: data.email,
    age: data.age,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return {
          ...state,
          [action.payload.key]: action.payload.value,
        };
      default:
        state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputAction = (event) => {
    dispatch({
      type: "update",
      payload: { key: event.target.name, value: event.target.value },
    });
  };

  const handleSubmit = () => {
    sendUpdatedData({
      endpoint: url,
      putData: {
        userName: state.userName,
        description: state.description,
        profilePicture: state.profilePicture,
        firstName: state.firstName,
        lastName: state.lastName,
        age: state.age,
      },
      token: token,
    });
  };
  return (
    <Layout>
          <Toaster/>
      <Profile
        state={state}
        pending={pending}
        error={error}
        onChange={handleInputAction}
        onSubmit={handleSubmit}
      />
    </Layout>
  );
  //  Cambiar el input number de edad, por un formato Date
};

export default UpdateProfile;

export async function getServerSideProps({ req, res }) {
  try {
    const token = getCookie("authToken", { req, res });
    const response = await fetch(
      `http://localhost:8080/profile`,
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
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.table(error);
  }
}
