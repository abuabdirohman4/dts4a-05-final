import * as React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

export default function GuardRoute({ children }) {
  const [user] = useAuthState(auth);
  if (children) {
    if (user) return <Navigate to="/" replace={true} />;
  } else {
    if (!user) return <Navigate to="/login" replace={true} />;
  }
  return children;
}
