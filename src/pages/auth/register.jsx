import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../firebase";
import Form from "./form";

function Register() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    register(credential.email, credential.password);
    navigate("/login");
  };

  return (
    <Form
      title="Create account"
      buttonText="Create account"
      questionText="Have registered?"
      redirectText="Login to your account"
      page="register"
      credential={credential}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}

export default Register;
