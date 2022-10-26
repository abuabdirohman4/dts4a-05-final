import React, { useState } from "react";
import { login } from "../../firebase";
// import { auth, register } from "../../firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Form from "./form";

function Login() {
  // const [user, isLoading] = useAuthState(auth);
  const navigate = useNavigate();
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredential({
      ...credential,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(credential.email, credential.password);
    console.log("res", res);
    navigate("/");
  };

  return (
    <Form
      title="Sign in to"
      buttonText="Login to your account"
      questionText="Not registered?"
      redirectText="Create account"
      page="login"
      credential={credential}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

export default Login;
