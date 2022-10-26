import React from "react";
import { Routes, Route } from "react-router-dom";
import GuardRoute from "../components/GuardRoute";
import Navbar from "../components/Navbar";

import Register from "../pages/auth/register";
import Login from "../pages/auth/login";
import Home from "../pages/home";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <GuardRoute>
            <Login />
          </GuardRoute>
        }
      />
      <Route
        path="/register"
        element={
          <GuardRoute>
            <Register />
          </GuardRoute>
        }
      />
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <GuardRoute />
          </>
        }
      >
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
