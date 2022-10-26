import React from "react";
import { useState } from "react";
import { auth, register, login } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Form from "./form";
import { useNavigate, useParams } from "react-router-dom";

function Auth() {
  const params = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState("login");
  console.log("page", page);
  const [user] = useAuthState(auth);
  // const [isLoading, setIsLoading] = useState(false);
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const changePage = (value) => {
    console.log("value", value);
    setPage(value);
    params.page = value;
    console.log("params nya jadi", params);
  };

  const handleChange = (e) => {
    setCredential({
      ...credential,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (params.page === "login") {
      const res = await login(credential.email, credential.password);
      console.log("res", res);
      // setPage("register");
      navigate("/auth/register");
    } else {
      const res = await register(credential.email, credential.password);
      console.log("res", res);
      console.log("user", user);

      // if (user) {
      //   setPage("login");
      // }
    }
  };

  // useEffect(() => {
  //   if (isLoading) {
  //     console.log("loading oi");
  //     return;
  //   }
  // }, [isLoading]);

  return (
    <>
      {params.page === "login" ? (
        <Form
          title="Sign in to"
          buttonText="Login to your account"
          questionText="Not registered?"
          redirectText="Create account"
          page="login"
          changePage={changePage}
          credential={credential}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      ) : (
        <Form
          title="Create account"
          buttonText="Create account"
          questionText="Have registered?"
          redirectText="Login to your account"
          page="register"
          changePage={changePage}
          credential={credential}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default Auth;
