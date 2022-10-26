import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../pages/auth";
// import Login from "../pages/auth/login";
// import Register from "../pages/auth/register";
import Home from "../pages/home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/auth/:page" element={<Auth />} />
      {/* <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> */}
    </Routes>
  );
}

export default AppRoutes;
