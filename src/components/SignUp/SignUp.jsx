import { useRouter } from "next/router";
import { useState } from "react";

export const SignUp = () => {
  const router = useRouter();
  const [buttonActive, setButtonActive] = useState(true);
  const [name, setName] = useState({ field: "", isValid: null });


  const validateWithExpressions = {
    name_and_lastname: /^[a-zA-ZÀ-ÿ\s]{2,16}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password:
      /^(?=(.*[a-zA-Z].*){2,})(?=.*\d.*)(?=.*\W.*)[a-zA-Z0-9 \S]{8,32}$/,
  };


  const handleSubmit = (e) => {

  };

  const clearInputsOnCancel = (e) => {

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
         type="text"
        />

        <input
        type="email"
        />
        <input
        type="password"
        />
             <section >
          <input
            type="checkbox"
            id="terms"
            onChange={() => setButtonActive(!buttonActive)}
          />
          <label htmlFor="terms">
            Terms and Conditions
          </label>
        </section>
        <div >
          <button
            onClick={clearInputsOnCancel}
          >Cancel</button>
          <button
            onSubmit={handleSubmit}
            onClick={() => {
              router.push("/terms");
            }}
            type="submit"
          >Register</button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
