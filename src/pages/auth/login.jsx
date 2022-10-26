import React, { useState } from "react";
import { login } from "../../firebase";
import { useNavigate } from "react-router-dom";
import Form from "./form";

function Login() {
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
    await login(credential.email, credential.password);
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
