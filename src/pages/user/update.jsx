import { useReducer } from "react";
// import { useRouter } from "next/router";
import { ENDPOINT, UPDATE_PROFILE } from "../../helpers/constants";
import { getCookie } from "cookies-next";
import Layout from "../../components/Layout/Layout";
import Image from "next/image";
import usePut from "../../hooks/usePut";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button"

const UpdateProfile = ({ data }) => {
  console.log(data);
  const url = `${ENDPOINT}${UPDATE_PROFILE}/${data?.id}`;
  const { pending, error, sendData } = usePut();
  // const router = useRouter();

  const initialState = {
    //   firstName: data.firstName,
    //   lastName: user.lastName,
    //   email: user.email,
    //   birthday: format(Date.parse(user.birthday), "yyyy-MM-dd"),
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
    sendData({
      endpoint: url,
      postData: {
        username,
        description,
        profile_picture,
        age,
        first_name,
        last_name,
      },
      token: token,
    });
  };

  return (
    <Layout>
      <div>
        <Image
          src={data?.profile_picture}
          width="250"
          height="250"
          alt={`Foto de perfil de ${data?.username}`}
        />
        <Button name={"Cambiar foto"}/>
        <form>
          <Input
            label={"Nombre de usuario"}
            name={"username"}
            type="text"
            placeholder={"Nombre de usuario"}
          />
          <Input
            label={"Descripción"}
            name={"description"}
            type="text"
            placeholder={"Descripción"}
          />
          <Input
            label={"Nombre"}
            name={"firstName"}
            type="text"
            placeholder={"Nombre"}
          />
          <Input
            label={"Apellido"}
            name={"lastName"}
            type="text"
            placeholder={"Apellido"}
          />
          <Input
            label={"Edad"}
            name={"age"}
            type="number"
            placeholder={"Edad"}
          />
        </form>
      </div>
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
