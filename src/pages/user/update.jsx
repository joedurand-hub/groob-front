import { useEffect, useReducer } from "react";
import { ENDPOINT, UPDATE_PROFILE } from "../../helpers/constants";
import Layout from "../../components/Layout/Layout";
import usePut from "../../hooks/usePut";
import Profile from "../../components/PutProfile/PutProfile";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/router";
import useRequest from "../../hooks/useRequest";

const UpdateProfile = () => {
  const { data, loading, error } = useRequest(`http://localhost:8080/profile`);
  const router = useRouter();
  const url = `${ENDPOINT}${UPDATE_PROFILE}/${data?._id}`;
  const { info, pending, sendUpdatedData } = usePut();

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
    userName: data?.userName,
    description: data?.description,
    firstName: data?.firstName,
    lastName: data?.lastName,
    email: data?.email,
    age: data?.age,
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
        firstName: state.firstName,
        lastName: state.lastName,
        age: state.age,
      },
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
